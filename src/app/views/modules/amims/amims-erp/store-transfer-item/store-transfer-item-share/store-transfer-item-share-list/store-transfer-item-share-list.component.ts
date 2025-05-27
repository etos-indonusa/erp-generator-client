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
import { StoreTransferItemReportService, StoreTransferItemService } from 'de-sdk-core';
import { AmimsStoreTransferItemDto } from 'de-sdk-core';
import { StoreTransferItemShareAddComponent } from '../store-transfer-item-share-add/store-transfer-item-share-add.component';
import { StoreTransferItemShareDetailComponent } from '../store-transfer-item-share-detail/store-transfer-item-share-detail.component';
import { EngineerPmtrItemService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { StoreTransferService } from 'de-sdk-core';
 


@Component({
    selector: 'app-store-transfer-item-share-list',
    templateUrl: './store-transfer-item-share-list.component.html',
    styleUrl: './store-transfer-item-share-list.component.scss'
})
export class StoreTransferItemShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idEngineerPmtrItem') idEngineerPmtrItem: string | null  = null;
     
    @Input('idPart') idPart: string | null  = null;
     
    @Input('idStoreTransfer') idStoreTransfer: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private storeTransferItemReportService: StoreTransferItemReportService,
        private storeTransferItemService: StoreTransferItemService,
        private tokenService: TokenService,

                        private engineerPmtrItemService: EngineerPmtrItemService,
                private partService: PartService,
                private storeTransferService: StoreTransferService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_storeTransferItem = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idEngineerPmtrItem)
            {
                this.filterEngineerPmtrItem.idEngineerPmtrItem = this.idEngineerPmtrItem
            }
            
           
            if (changes.idPart)
            {
                this.filterPart.idPart = this.idPart
            }
            
           
            if (changes.idStoreTransfer)
            {
                this.filterStoreTransfer.idStoreTransfer = this.idStoreTransfer
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllEngineerPmtrItem();
                    this.getAllPart();
                    this.getAllStoreTransfer();
                    }

    
    listEngineerPmtrItem: any[] = []; 
    
    listPart: any[] = []; 
    
    listStoreTransfer: any[] = []; 
    
    //untuak filter dari prent
    
    filterEngineerPmtrItem:any = {} 
    
    filterPart:any = {} 
    
    filterStoreTransfer:any = {} 
    

    // untuk fungsi get ALL relation
            getAllEngineerPmtrItem() {
    this.engineerPmtrItemService.engineerPmtrItemControllerFindAll().subscribe(
      data => this.listEngineerPmtrItem = data.data ?? []
    );
  }
        getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        getAllStoreTransfer() {
    this.storeTransferService.storeTransferControllerFindAll().subscribe(
      data => this.listStoreTransfer = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    idEngineerPmtrItem: null,
  idPart: null,
  idStoreTransfer: null,
  qtyTransferMin: null,
  qtyTransferMax: null
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
    sortValue: string | null = 'desc';
    sortKey: string | null = 'created_at';
    search: string | null = null;
    search_field: string[] = ["newBin","noteItemTransfer","oldIdPart"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idEngineerPmtrItem: null,
  idPart: null,
  idStoreTransfer: null,
  qtyTransferMin: null,
  qtyTransferMax: null
        };
        this.filter.status_storeTransferItem = this.status == 'semua' ? null : this.status;
    }

    resetData() {
        this.resetParam();
        this.searchData();
    }

     get validSortValue(): 'asc' | 'desc' | undefined {
        if (this.sortValue === 'asc') return 'asc';
        if (this.sortValue === 'desc') return 'desc';
        return undefined;
    }

    searchData(reset: boolean = false): void {
        if (reset) this.pageIndex = 1;
        this.loading = true;

        const finalFilter: any = this.buildFilterForBackend(this.filter);
        finalFilter[`id_store_transfer_item`] = { isNotNull: 'aktif' };

        this.storeTransferItemReportService.storeTransferItemReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "engineer_pmtr_item": this.filterEngineerPmtrItem, type: 'inner'
                    },
                                        {
                        "part": this.filterPart, type: 'inner'
                    },
                                        {
                        "store_transfer": this.filterStoreTransfer, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "engineer_pmtr_item",
    "type": "single"
  },
  {
    "name": "part",
    "type": "single"
  },
  {
    "name": "store_transfer",
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
        this.sortValue = (this.currentSort && this.currentSort.value) || 'desc';
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
              { key: 'newBin',  show: true },
              { key: 'noteItemTransfer',  show: true },
              { key: 'oldIdPart',  show: true },
              { key: 'qtyTransfer',  show: true },
              { key: 'statusItem',  show: true },
              { key: 'updatedAt',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('storeTransferItem_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('storeTransferItem_columns');
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
                console.warn('Gagal parse storeTransferItem dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('store-transfer-item', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<StoreTransferItemShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: StoreTransferItemShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsStoreTransferItemDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<StoreTransferItemShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: StoreTransferItemShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idStoreTransferItem:data.idStoreTransferItem
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