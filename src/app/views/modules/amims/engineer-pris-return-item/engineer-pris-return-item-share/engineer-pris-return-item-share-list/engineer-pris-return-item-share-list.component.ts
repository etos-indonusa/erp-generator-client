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
import { EngineerPrisReturnItemReportService, EngineerPrisReturnItemService } from 'de-sdk-core/lib/services';
import { AmimsEngineerPrisReturnItemDto } from 'de-sdk-core/lib/models';
import { EngineerPrisReturnItemShareAddComponent } from '../engineer-pris-return-item-share-add/engineer-pris-return-item-share-add.component';
import { EngineerPrisReturnItemShareDetailComponent } from '../engineer-pris-return-item-share-detail/engineer-pris-return-item-share-detail.component';
import { EngineerPrisItemService } from 'de-sdk-core/lib/services';
 


@Component({
    selector: 'app-engineer-pris-return-item-share-list',
    templateUrl: './engineer-pris-return-item-share-list.component.html',
    styleUrl: './engineer-pris-return-item-share-list.component.scss'
})
export class EngineerPrisReturnItemShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idEngineerPrisItem') idEngineerPrisItem: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private engineerPrisReturnItemReportService: EngineerPrisReturnItemReportService,
        private engineerPrisReturnItemService: EngineerPrisReturnItemService,
        private tokenService: TokenService,

                        private engineerPrisItemService: EngineerPrisItemService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_engineerPrisReturnItem = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idEngineerPrisItem)
            {
                this.filterEngineerPrisItem.idEngineerPrisItem = this.idEngineerPrisItem
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllEngineerPrisItem();
                    }

    
    listEngineerPrisItem: any[] = []; 
    
    //untuak filter dari prent
    
    filterEngineerPrisItem:any = {} 
    

    // untuk fungsi get ALL relation
            getAllEngineerPrisItem() {
    this.engineerPrisItemService.engineerPrisItemControllerFindAll().subscribe(
      data => this.listEngineerPrisItem = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    idEngineerPrisItem: null,
  isAccept: null,
  qtyReturnMin: null,
  qtyReturnMax: null
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
    search_field: string[] = ["isAccept"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idEngineerPrisItem: null,
  isAccept: null,
  qtyReturnMin: null,
  qtyReturnMax: null
        };
        this.filter.status_engineerPrisReturnItem = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_engineer_pris_return_item`] = { isNotNull: 'aktif' };

        this.engineerPrisReturnItemReportService.engineerPrisReturnItemReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "engineer_pris_item": this.filterEngineerPrisItem, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "engineer_pris_item",
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
         { key: 'isAccept',  show: true },
              { key: 'qtyReturn',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('engineerPrisReturnItem_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('engineerPrisReturnItem_columns');
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
                console.warn('Gagal parse engineerPrisReturnItem dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('engineer-pris-return-item', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<EngineerPrisReturnItemShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: EngineerPrisReturnItemShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsEngineerPrisReturnItemDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<EngineerPrisReturnItemShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: EngineerPrisReturnItemShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idEngineerPrisReturnItem:data.idEngineerPrisReturnItem
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