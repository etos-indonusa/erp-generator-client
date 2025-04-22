import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { PesanService } from 'src/app/shared/services/pesan.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment.prod';
import { EngineerPmtrItemReportService, EngineerPmtrItemService } from 'de-sdk-core/services';
import { AmimsEngineerPmtrItemDto } from 'de-sdk-core/models';
import { EngineerPmtrItemShareAddComponent } from '../engineer-pmtr-item-share-add/engineer-pmtr-item-share-add.component';
import { EngineerPmtrItemShareDetailComponent } from '../engineer-pmtr-item-share-detail/engineer-pmtr-item-share-detail.component';
import { EngineerPmtrService } from 'de-sdk-core/services';
import { MpartService } from 'de-sdk-core/services';
 


@Component({
    selector: 'app-engineer-pmtr-item-share-list',
    templateUrl: './engineer-pmtr-item-share-list.component.html',
    styleUrl: './engineer-pmtr-item-share-list.component.scss'
})
export class EngineerPmtrItemShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idEngineerPmtr') idEngineerPmtr: string | null  = null;
     
    @Input('idMpart') idMpart: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private engineerPmtrItemReportService: EngineerPmtrItemReportService,
        private engineerPmtrItemService: EngineerPmtrItemService,
        private tokenService: TokenService,

                        private engineerPmtrService: EngineerPmtrService,
                private mpartService: MpartService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_engineerPmtrItem = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idEngineerPmtr)
            {
                this.filterEngineerPmtr.idEngineerPmtr = this.idEngineerPmtr
            }
            
           
            if (changes.idMpart)
            {
                this.filterMpart.idMpart = this.idMpart
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllEngineerPmtr();
                    this.getAllMpart();
                    }

    
    listEngineerPmtr: any[] = []; 
    
    listMpart: any[] = []; 
    
    //untuak filter dari prent
    
    filterEngineerPmtr:any = {} 
    
    filterMpart:any = {} 
    

    // untuk fungsi get ALL relation
            getAllEngineerPmtr() {
    this.engineerPmtrService.engineerPmtrControllerFindAll().subscribe(
      data => this.listEngineerPmtr = data.data ?? []
    );
  }
        getAllMpart() {
    this.mpartService.mpartControllerFindAll().subscribe(
      data => this.listMpart = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    idEngineerPmtr: null,
  idMpart: null,
  qtyPmtrMin: null,
  qtyPmtrMax: null
    };
 
    expandSet = new Set<string>();
    onExpandChange(id: string, checked: boolean): void {
        if (checked) {
            this.expandSet.add(id);
        } else {
            this.expandSet.delete(id);
        }
    }

    pageIndex = 1;
    pageSize = 30;
    total = 0;
    listOfData: any[] = [];
    loading = true;
    sortValue: string | null = 'asc';
    sortKey: string | null = 'created_at';
    search: string | null = null;
    search_field: string[] = ["figureIndex","noteItemPmtr","priority"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idEngineerPmtr: null,
  idMpart: null,
  qtyPmtrMin: null,
  qtyPmtrMax: null
        };
        this.filter.status_engineerPmtrItem = this.status == 'semua' ? null : this.status;
    }

    resetData() {
        this.resetParam();
        this.searchData();
    }

    get validSortValue(): 'asc' | 'desc' | undefined {
        if (this.sortValue === 'ascend') return 'asc';
        if (this.sortValue === 'descend') return 'desc';
        return undefined;
    }

    searchData(reset: boolean = false): void {
        if (reset) this.pageIndex = 1;
        this.loading = true;

        const finalFilter: any = this.buildFilterForBackend(this.filter);
        finalFilter[`id_engineer_pmtr_item`] = { isNotNull: 'aktif' };

        this.engineerPmtrItemReportService.engineerPmtrItemReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "engineer_pmtr": this.filterEngineerPmtr, type: 'inner'
                    },
                                        {
                        "mpart": this.filterMpart, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "engineer_pmtr",
    "type": "single"
  },
  {
    "name": "mpart",
    "type": "single"
  }
],
                sortKey: this.sortKey ?? undefined,
                sortValue: this.validSortValue,
                pageIndex: this.pageIndex,
                pageSize: this.pageSize
            }
        }).subscribe(data => {
            this.loading = false;
            this.total = data.total || 0;
            this.listOfData = data.data || [];
        }, err => {
            this.loading = false;
        });
    }

    currentSort: any = {};
    onQueryParamsChange(params: NzTableQueryParams): void {
        this.pageIndex = params.pageIndex;
        this.pageSize = params.pageSize;
        this.currentSort = params.sort.find(item => item.value !== null);
        this.sortKey = (this.currentSort && this.currentSort.key) || 'created_at';
        this.sortValue = (this.currentSort && this.currentSort.value) || 'asc';
        this.searchData();
    }

    buildFilterForBackend(filter: any): any {
        const backendFilter: any = {};
        for (const key of Object.keys(filter)) {
            const val = filter[key];
            if (val == null || val === '') continue;

            if (key.endsWith('Min')) {
                const field = key.replace(/Min$/, '');
                backendFilter[field] = backendFilter[field] || {};
                backendFilter[field].gte = val;
            } else if (key.endsWith('Max')) {
                const field = key.replace(/Max$/, '');
                backendFilter[field] = backendFilter[field] || {};
                backendFilter[field].lte = val;
            } else if (key.endsWith('Range') && Array.isArray(val)) {
                const field = key.replace(/Range$/, '');
                backendFilter[field] = {
                    between: val
                };
            } else {
                backendFilter[key] = val;
            }
        }

        return backendFilter;
    }

     // TABLE DINAMIS 
    columns = [ 
         { key: 'createdAt',  show: true },
              { key: 'figureIndex',  show: true },
              { key: 'noteItemPmtr',  show: true },
              { key: 'priority',  show: true },
              { key: 'qtyPmtr',  show: true },
              { key: 'updatedAt',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('engineerPmtrItem_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('engineerPmtrItem_columns');
        if (saved) {
            try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
                // Sinkronkan dengan default jika ada key yang hilang
                this.columns.forEach((col, index) => {
                const found = parsed.find((p: any) => p.key === col.key);
                if (found) this.columns[index].show = found.show;
                });
            }
            } catch (e) {
                console.warn('Gagal parse engineerPmtrItem dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('engineer-pmtr-item', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<EngineerPmtrItemShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: EngineerPmtrItemShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsEngineerPmtrItemDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<EngineerPmtrItemShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: EngineerPmtrItemShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idEngineerPmtrItem:data.idEngineerPmtrItem
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

    update(data: any) {}
    delete(id: string) {} 

    print() {
        let url = environment.srv_document + '/pdfAkutansi/vouchers?filter=' + JSON.stringify(this.filter) + '&token=' + this.tokenService.getToken();
        window.open(url, '_blank');
    }
}