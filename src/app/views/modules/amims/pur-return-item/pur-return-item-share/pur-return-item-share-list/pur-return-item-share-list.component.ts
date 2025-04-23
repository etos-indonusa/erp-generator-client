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
import { PurReturnItemReportService, PurReturnItemService } from 'de-sdk-core/lib/services';
import { AmimsPurReturnItemDto } from 'de-sdk-core/lib/models';
import { PurReturnItemShareAddComponent } from '../pur-return-item-share-add/pur-return-item-share-add.component';
import { PurReturnItemShareDetailComponent } from '../pur-return-item-share-detail/pur-return-item-share-detail.component';
import { MpartService } from 'de-sdk-core/lib/services';
import { PurGrnItemService } from 'de-sdk-core/lib/services';
import { PurPoItemService } from 'de-sdk-core/lib/services';
import { PurReturnService } from 'de-sdk-core/lib/services';
 


@Component({
    selector: 'app-pur-return-item-share-list',
    templateUrl: './pur-return-item-share-list.component.html',
    styleUrl: './pur-return-item-share-list.component.scss'
})
export class PurReturnItemShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idMpart') idMpart: string | null  = null;
     
    @Input('idPurGrnItem') idPurGrnItem: string | null  = null;
     
    @Input('idPurPoItem') idPurPoItem: string | null  = null;
     
    @Input('idPurReturn') idPurReturn: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private purReturnItemReportService: PurReturnItemReportService,
        private purReturnItemService: PurReturnItemService,
        private tokenService: TokenService,

                        private mpartService: MpartService,
                private purGrnItemService: PurGrnItemService,
                private purPoItemService: PurPoItemService,
                private purReturnService: PurReturnService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_purReturnItem = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idMpart)
            {
                this.filterMpart.idMpart = this.idMpart
            }
            
           
            if (changes.idPurGrnItem)
            {
                this.filterPurGrnItem.idPurGrnItem = this.idPurGrnItem
            }
            
           
            if (changes.idPurPoItem)
            {
                this.filterPurPoItem.idPurPoItem = this.idPurPoItem
            }
            
           
            if (changes.idPurReturn)
            {
                this.filterPurReturn.idPurReturn = this.idPurReturn
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllMpart();
                    this.getAllPurGrnItem();
                    this.getAllPurPoItem();
                    this.getAllPurReturn();
                    }

    
    listMpart: any[] = []; 
    
    listPurGrnItem: any[] = []; 
    
    listPurPoItem: any[] = []; 
    
    listPurReturn: any[] = []; 
    
    //untuak filter dari prent
    
    filterMpart:any = {} 
    
    filterPurGrnItem:any = {} 
    
    filterPurPoItem:any = {} 
    
    filterPurReturn:any = {} 
    

    // untuk fungsi get ALL relation
            getAllMpart() {
    this.mpartService.mpartControllerFindAll().subscribe(
      data => this.listMpart = data.data ?? []
    );
  }
        getAllPurGrnItem() {
    this.purGrnItemService.purGrnItemControllerFindAll().subscribe(
      data => this.listPurGrnItem = data.data ?? []
    );
  }
        getAllPurPoItem() {
    this.purPoItemService.purPoItemControllerFindAll().subscribe(
      data => this.listPurPoItem = data.data ?? []
    );
  }
        getAllPurReturn() {
    this.purReturnService.purReturnControllerFindAll().subscribe(
      data => this.listPurReturn = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    idMpart: null,
  idPurGrnItem: null,
  idPurPoItem: null,
  idPurReturn: null,
  qtyReturnMin: null,
  qtyReturnMax: null,
  statusItemMin: null,
  statusItemMax: null
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
    search_field: string[] = ["noteReturnItem"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idMpart: null,
  idPurGrnItem: null,
  idPurPoItem: null,
  idPurReturn: null,
  qtyReturnMin: null,
  qtyReturnMax: null,
  statusItemMin: null,
  statusItemMax: null
        };
        this.filter.status_purReturnItem = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_pur_return_item`] = { isNotNull: 'aktif' };

        this.purReturnItemReportService.purReturnItemReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "mpart": this.filterMpart, type: 'inner'
                    },
                                        {
                        "pur_grn_item": this.filterPurGrnItem, type: 'inner'
                    },
                                        {
                        "pur_po_item": this.filterPurPoItem, type: 'inner'
                    },
                                        {
                        "pur_return": this.filterPurReturn, type: 'inner'
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
    "name": "pur_grn_item",
    "type": "single"
  },
  {
    "name": "pur_po_item",
    "type": "single"
  },
  {
    "name": "pur_return",
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
         { key: 'noteReturnItem',  show: true },
              { key: 'qtyReturn',  show: true },
              { key: 'statusItem',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('purReturnItem_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('purReturnItem_columns');
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
                console.warn('Gagal parse purReturnItem dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('pur-return-item', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<PurReturnItemShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: PurReturnItemShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsPurReturnItemDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<PurReturnItemShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: PurReturnItemShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idPurReturnItem:data.idPurReturnItem
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