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
import { PurPoItemReportService, PurPoItemService } from 'de-sdk-core';
import { AmimsPurPoItemDto } from 'de-sdk-core';
import { PurPoItemShareAddComponent } from '../pur-po-item-share-add/pur-po-item-share-add.component';
import { PurPoItemShareDetailComponent } from '../pur-po-item-share-detail/pur-po-item-share-detail.component';
import { EngineerRtiService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { PurPoService } from 'de-sdk-core';
import { PurPrItemService } from 'de-sdk-core';
import { PurPrclService } from 'de-sdk-core';
import { QaRpdService } from 'de-sdk-core';
 


@Component({
    selector: 'app-pur-po-item-share-list',
    templateUrl: './pur-po-item-share-list.component.html',
    styleUrl: './pur-po-item-share-list.component.scss'
})
export class PurPoItemShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idEngineerRti') idEngineerRti: string | null  = null;
     
    @Input('idMpart') idMpart: string | null  = null;
     
    @Input('idPart') idPart: string | null  = null;
     
    @Input('idPurPo') idPurPo: string | null  = null;
     
    @Input('idPurPrItem') idPurPrItem: string | null  = null;
     
    @Input('idPurPrcl') idPurPrcl: string | null  = null;
     
    @Input('idQaRpd') idQaRpd: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private purPoItemReportService: PurPoItemReportService,
        private purPoItemService: PurPoItemService,
        private tokenService: TokenService,

                        private engineerRtiService: EngineerRtiService,
                private mpartService: MpartService,
                private partService: PartService,
                private purPoService: PurPoService,
                private purPrItemService: PurPrItemService,
                private purPrclService: PurPrclService,
                private qaRpdService: QaRpdService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_purPoItem = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idEngineerRti)
            {
                this.filterEngineerRti.idEngineerRti = this.idEngineerRti
            }
            
           
            if (changes.idMpart)
            {
                this.filterMpart.idMpart = this.idMpart
            }
            
           
            if (changes.idPart)
            {
                this.filterPart.idPart = this.idPart
            }
            
           
            if (changes.idPurPo)
            {
                this.filterPurPo.idPurPo = this.idPurPo
            }
            
           
            if (changes.idPurPrItem)
            {
                this.filterPurPrItem.idPurPrItem = this.idPurPrItem
            }
            
           
            if (changes.idPurPrcl)
            {
                this.filterPurPrcl.idPurPrcl = this.idPurPrcl
            }
            
           
            if (changes.idQaRpd)
            {
                this.filterQaRpd.idQaRpd = this.idQaRpd
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllEngineerRti();
                    this.getAllMpart();
                    this.getAllPart();
                    this.getAllPurPo();
                    this.getAllPurPrItem();
                    this.getAllPurPrcl();
                    this.getAllQaRpd();
                    }

    
    listEngineerRti: any[] = []; 
    
    listMpart: any[] = []; 
    
    listPart: any[] = []; 
    
    listPurPo: any[] = []; 
    
    listPurPrItem: any[] = []; 
    
    listPurPrcl: any[] = []; 
    
    listQaRpd: any[] = []; 
    
    //untuak filter dari prent
    
    filterEngineerRti:any = {} 
    
    filterMpart:any = {} 
    
    filterPart:any = {} 
    
    filterPurPo:any = {} 
    
    filterPurPrItem:any = {} 
    
    filterPurPrcl:any = {} 
    
    filterQaRpd:any = {} 
    

    // untuk fungsi get ALL relation
            getAllEngineerRti() {
    this.engineerRtiService.engineerRtiControllerFindAll().subscribe(
      data => this.listEngineerRti = data.data ?? []
    );
  }
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
        getAllPurPo() {
    this.purPoService.purPoControllerFindAll().subscribe(
      data => this.listPurPo = data.data ?? []
    );
  }
        getAllPurPrItem() {
    this.purPrItemService.purPrItemControllerFindAll().subscribe(
      data => this.listPurPrItem = data.data ?? []
    );
  }
        getAllPurPrcl() {
    this.purPrclService.purPrclControllerFindAll().subscribe(
      data => this.listPurPrcl = data.data ?? []
    );
  }
        getAllQaRpd() {
    this.qaRpdService.qaRpdControllerFindAll().subscribe(
      data => this.listQaRpd = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    eddMin: null,
  eddMax: null,
  idEngineerRti: null,
  idMpart: null,
  idPart: null,
  idPurPo: null,
  idPurPrItem: null,
  idPurPrcl: null,
  idQaRpd: null,
  priceMin: null,
  priceMax: null,
  qtyPoMin: null,
  qtyPoMax: null,
  totalQtyGrnMin: null,
  totalQtyGrnMax: null,
  tsnCycleMin: null,
  tsnCycleMax: null,
  tsnHoursMin: null,
  tsnHoursMax: null,
  tsnValMin: null,
  tsnValMax: null,
  tsoCycleMin: null,
  tsoCycleMax: null,
  tsoHoursMin: null,
  tsoHoursMax: null,
  tsoValMin: null,
  tsoValMax: null,
  warantyStartCycleMin: null,
  warantyStartCycleMax: null,
  warantyStartDateRange: null,
  warantyStartDaysMin: null,
  warantyStartDaysMax: null,
  warantyStartHoursMin: null,
  warantyStartHoursMax: null
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
    search_field: string[] = ["notePoItem","oldPoItem","priorityPoItem","tsnVar","tsoVar","warantyStartDate"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            eddMin: null,
  eddMax: null,
  idEngineerRti: null,
  idMpart: null,
  idPart: null,
  idPurPo: null,
  idPurPrItem: null,
  idPurPrcl: null,
  idQaRpd: null,
  priceMin: null,
  priceMax: null,
  qtyPoMin: null,
  qtyPoMax: null,
  totalQtyGrnMin: null,
  totalQtyGrnMax: null,
  tsnCycleMin: null,
  tsnCycleMax: null,
  tsnHoursMin: null,
  tsnHoursMax: null,
  tsnValMin: null,
  tsnValMax: null,
  tsoCycleMin: null,
  tsoCycleMax: null,
  tsoHoursMin: null,
  tsoHoursMax: null,
  tsoValMin: null,
  tsoValMax: null,
  warantyStartCycleMin: null,
  warantyStartCycleMax: null,
  warantyStartDateRange: null,
  warantyStartDaysMin: null,
  warantyStartDaysMax: null,
  warantyStartHoursMin: null,
  warantyStartHoursMax: null
        };
        this.filter.status_purPoItem = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_pur_po_item`] = { isNotNull: 'aktif' };

        this.purPoItemReportService.purPoItemReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "engineer_rti": this.filterEngineerRti, type: 'inner'
                    },
                                        {
                        "mpart": this.filterMpart, type: 'inner'
                    },
                                        {
                        "part": this.filterPart, type: 'inner'
                    },
                                        {
                        "pur_po": this.filterPurPo, type: 'inner'
                    },
                                        {
                        "pur_pr_item": this.filterPurPrItem, type: 'inner'
                    },
                                        {
                        "pur_prcl": this.filterPurPrcl, type: 'inner'
                    },
                                        {
                        "qa_rpd": this.filterQaRpd, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "engineer_rti",
    "type": "single"
  },
  {
    "name": "mpart",
    "type": "single"
  },
  {
    "name": "part",
    "type": "single"
  },
  {
    "name": "pur_po",
    "type": "single"
  },
  {
    "name": "pur_pr_item",
    "type": "single"
  },
  {
    "name": "pur_prcl",
    "type": "single"
  },
  {
    "name": "qa_rpd",
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
         { key: 'edd',  show: true },
              { key: 'notePoItem',  show: true },
              { key: 'oldPoItem',  show: true },
              { key: 'price',  show: true },
              { key: 'priorityPoItem',  show: true },
              { key: 'qtyPo',  show: true },
              { key: 'totalQtyGrn',  show: true },
              { key: 'tsnCycle',  show: true },
              { key: 'tsnHours',  show: true },
              { key: 'tsnVal',  show: true },
              { key: 'tsnVar',  show: true },
              { key: 'tsoCycle',  show: true },
              { key: 'tsoHours',  show: true },
              { key: 'tsoVal',  show: true },
              { key: 'tsoVar',  show: true },
              { key: 'warantyStartCycle',  show: true },
              { key: 'warantyStartDate',  show: true },
              { key: 'warantyStartDays',  show: true },
              { key: 'warantyStartHours',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('purPoItem_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('purPoItem_columns');
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
                console.warn('Gagal parse purPoItem dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('pur-po-item', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<PurPoItemShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: PurPoItemShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsPurPoItemDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<PurPoItemShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: PurPoItemShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idPurPoItem:data.idPurPoItem
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