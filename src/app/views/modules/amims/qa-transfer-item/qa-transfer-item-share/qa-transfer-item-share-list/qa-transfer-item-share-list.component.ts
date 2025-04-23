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
import { QaTransferItemReportService, QaTransferItemService } from 'de-sdk-core/lib/services';
import { AmimsQaTransferItemDto } from 'de-sdk-core/lib/models';
import { QaTransferItemShareAddComponent } from '../qa-transfer-item-share-add/qa-transfer-item-share-add.component';
import { QaTransferItemShareDetailComponent } from '../qa-transfer-item-share-detail/qa-transfer-item-share-detail.component';
import { MpcSelfMaintenanceService } from 'de-sdk-core/lib/services';
import { PurPrclService } from 'de-sdk-core/lib/services';
import { QaTransferService } from 'de-sdk-core/lib/services';
 


@Component({
    selector: 'app-qa-transfer-item-share-list',
    templateUrl: './qa-transfer-item-share-list.component.html',
    styleUrl: './qa-transfer-item-share-list.component.scss'
})
export class QaTransferItemShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idMpcSelfMaintenance') idMpcSelfMaintenance: string | null  = null;
     
    @Input('idPurPrcl') idPurPrcl: string | null  = null;
     
    @Input('idQaTransfer') idQaTransfer: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private qaTransferItemReportService: QaTransferItemReportService,
        private qaTransferItemService: QaTransferItemService,
        private tokenService: TokenService,

                        private mpcSelfMaintenanceService: MpcSelfMaintenanceService,
                private purPrclService: PurPrclService,
                private qaTransferService: QaTransferService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_qaTransferItem = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idMpcSelfMaintenance)
            {
                this.filterMpcSelfMaintenance.idMpcSelfMaintenance = this.idMpcSelfMaintenance
            }
            
           
            if (changes.idPurPrcl)
            {
                this.filterPurPrcl.idPurPrcl = this.idPurPrcl
            }
            
           
            if (changes.idQaTransfer)
            {
                this.filterQaTransfer.idQaTransfer = this.idQaTransfer
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllMpcSelfMaintenance();
                    this.getAllPurPrcl();
                    this.getAllQaTransfer();
                    }

    
    listMpcSelfMaintenance: any[] = []; 
    
    listPurPrcl: any[] = []; 
    
    listQaTransfer: any[] = []; 
    
    //untuak filter dari prent
    
    filterMpcSelfMaintenance:any = {} 
    
    filterPurPrcl:any = {} 
    
    filterQaTransfer:any = {} 
    

    // untuk fungsi get ALL relation
            getAllMpcSelfMaintenance() {
    this.mpcSelfMaintenanceService.mpcSelfMaintenanceControllerFindAll().subscribe(
      data => this.listMpcSelfMaintenance = data.data ?? []
    );
  }
        getAllPurPrcl() {
    this.purPrclService.purPrclControllerFindAll().subscribe(
      data => this.listPurPrcl = data.data ?? []
    );
  }
        getAllQaTransfer() {
    this.qaTransferService.qaTransferControllerFindAll().subscribe(
      data => this.listQaTransfer = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    idMpcSelfMaintenance: null,
  idPurPrcl: null,
  idQaTransfer: null
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
    search_field: string[] = [];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idMpcSelfMaintenance: null,
  idPurPrcl: null,
  idQaTransfer: null
        };
        this.filter.status_qaTransferItem = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_qa_transfer_item`] = { isNotNull: 'aktif' };

        this.qaTransferItemReportService.qaTransferItemReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "mpc_self_maintenance": this.filterMpcSelfMaintenance, type: 'inner'
                    },
                                        {
                        "pur_prcl": this.filterPurPrcl, type: 'inner'
                    },
                                        {
                        "qa_transfer": this.filterQaTransfer, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "mpc_self_maintenance",
    "type": "single"
  },
  {
    "name": "pur_prcl",
    "type": "single"
  },
  {
    "name": "qa_transfer",
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
    columns:any[] = [ 
        
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('qaTransferItem_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('qaTransferItem_columns');
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
                console.warn('Gagal parse qaTransferItem dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('qa-transfer-item', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<QaTransferItemShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: QaTransferItemShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsQaTransferItemDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<QaTransferItemShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: QaTransferItemShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idQaTransferItem:data.idQaTransferItem
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