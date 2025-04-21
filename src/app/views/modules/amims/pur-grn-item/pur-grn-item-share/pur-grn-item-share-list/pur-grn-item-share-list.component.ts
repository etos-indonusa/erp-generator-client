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
import { PurGrnItemReportService, PurGrnItemService } from 'src/sdk/core/services';
import { AmimsPurGrnItemDto } from 'src/sdk/core/models';
import { PurGrnItemShareAddComponent } from '../pur-grn-item-share-add/pur-grn-item-share-add.component';
import { PurGrnItemShareDetailComponent } from '../pur-grn-item-share-detail/pur-grn-item-share-detail.component';
import { MpartService } from 'src/sdk/core/services';
import { PartService } from 'src/sdk/core/services';
import { PurGrnService } from 'src/sdk/core/services';
import { PurPoItemService } from 'src/sdk/core/services';
 


@Component({
    selector: 'app-pur-grn-item-share-list',
    templateUrl: './pur-grn-item-share-list.component.html',
    styleUrl: './pur-grn-item-share-list.component.scss'
})
export class PurGrnItemShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idMpart') idMpart: string | null  = null;
     
    @Input('idPart') idPart: string | null  = null;
     
    @Input('idPurGrn') idPurGrn: string | null  = null;
     
    @Input('idPurPoItem') idPurPoItem: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private purGrnItemReportService: PurGrnItemReportService,
        private purGrnItemService: PurGrnItemService,
        private tokenService: TokenService,

                        private mpartService: MpartService,
                private partService: PartService,
                private purGrnService: PurGrnService,
                private purPoItemService: PurPoItemService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_purGrnItem = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idMpart)
            {
                this.filterMpart.idMpart = this.idMpart
            }
            
           
            if (changes.idPart)
            {
                this.filterPart.idPart = this.idPart
            }
            
           
            if (changes.idPurGrn)
            {
                this.filterPurGrn.idPurGrn = this.idPurGrn
            }
            
           
            if (changes.idPurPoItem)
            {
                this.filterPurPoItem.idPurPoItem = this.idPurPoItem
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllMpart();
                    this.getAllPart();
                    this.getAllPurGrn();
                    this.getAllPurPoItem();
                    }

    
    listMpart: any[] = []; 
    
    listPart: any[] = []; 
    
    listPurGrn: any[] = []; 
    
    listPurPoItem: any[] = []; 
    
    //untuak filter dari prent
    
    filterMpart:any = {} 
    
    filterPart:any = {} 
    
    filterPurGrn:any = {} 
    
    filterPurPoItem:any = {} 
    

    // untuk fungsi get ALL relation
            getAllMpart() {
    this.mpartService.mpartControllerFindAll().subscribe(
      data => this.listMpart = data.data ?? []
    );
  }
        getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        getAllPurGrn() {
    this.purGrnService.purGrnControllerFindAll().subscribe(
      data => this.listPurGrn = data.data ?? []
    );
  }
        getAllPurPoItem() {
    this.purPoItemService.purPoItemControllerFindAll().subscribe(
      data => this.listPurPoItem = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    idMpart: null,
  idPart: null,
  idPurGrn: null,
  idPurPoItem: null,
  qtyGrnMin: null,
  qtyGrnMax: null
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
    search_field: string[] = ["noteGrnItem","serialNumber"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idMpart: null,
  idPart: null,
  idPurGrn: null,
  idPurPoItem: null,
  qtyGrnMin: null,
  qtyGrnMax: null
        };
        this.filter.status_purGrnItem = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_pur_grn_item`] = { isNotNull: 'aktif' };

        this.purGrnItemReportService.purGrnItemReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "mpart": this.filterMpart, type: 'inner'
                    },
                                        {
                        "part": this.filterPart, type: 'inner'
                    },
                                        {
                        "pur_grn": this.filterPurGrn, type: 'inner'
                    },
                                        {
                        "pur_po_item": this.filterPurPoItem, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "mpart",
    "type": "single"
  },
  {
    "name": "part",
    "type": "single"
  },
  {
    "name": "pur_grn",
    "type": "single"
  },
  {
    "name": "pur_po_item",
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
         { key: 'noteGrnItem',  show: true },
              { key: 'qtyGrn',  show: true },
              { key: 'serialNumber',  show: true },
              { key: 'statusGrn',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('purGrnItem_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('purGrnItem_columns');
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
                console.warn('Gagal parse purGrnItem dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('pur-grn-item', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<PurGrnItemShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: PurGrnItemShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsPurGrnItemDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<PurGrnItemShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: PurGrnItemShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idPurGrnItem:data.idPurGrnItem
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