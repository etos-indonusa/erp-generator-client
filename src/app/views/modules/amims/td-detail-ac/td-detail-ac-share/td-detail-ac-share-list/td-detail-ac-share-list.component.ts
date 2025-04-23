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
import { TdDetailAcReportService, TdDetailAcService } from 'de-sdk-core/lib/services';
import { AmimsTdDetailAcDto } from 'de-sdk-core/lib/models';
import { TdDetailAcShareAddComponent } from '../td-detail-ac-share-add/td-detail-ac-share-add.component';
import { TdDetailAcShareDetailComponent } from '../td-detail-ac-share-detail/td-detail-ac-share-detail.component';
import { AircraftService } from 'de-sdk-core/lib/services';
import { TdDetailService } from 'de-sdk-core/lib/services';
import { TechLogService } from 'de-sdk-core/lib/services';
 


@Component({
    selector: 'app-td-detail-ac-share-list',
    templateUrl: './td-detail-ac-share-list.component.html',
    styleUrl: './td-detail-ac-share-list.component.scss'
})
export class TdDetailAcShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idAircraft') idAircraft: string | null  = null;
     
    @Input('idTdDetail') idTdDetail: string | null  = null;
     
    @Input('idTechLog') idTechLog: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private tdDetailAcReportService: TdDetailAcReportService,
        private tdDetailAcService: TdDetailAcService,
        private tokenService: TokenService,

                        private aircraftService: AircraftService,
                private tdDetailService: TdDetailService,
                private techLogService: TechLogService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_tdDetailAc = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idAircraft)
            {
                this.filterAircraft.idAircraft = this.idAircraft
            }
            
           
            if (changes.idTdDetail)
            {
                this.filterTdDetail.idTdDetail = this.idTdDetail
            }
            
           
            if (changes.idTechLog)
            {
                this.filterTechLog.idTechLog = this.idTechLog
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllAircraft();
                    this.getAllTdDetail();
                    this.getAllTechLog();
                    }

    
    listAircraft: any[] = []; 
    
    listTdDetail: any[] = []; 
    
    listTechLog: any[] = []; 
    
    //untuak filter dari prent
    
    filterAircraft:any = {} 
    
    filterTdDetail:any = {} 
    
    filterTechLog:any = {} 
    

    // untuk fungsi get ALL relation
            getAllAircraft() {
    this.aircraftService.aircraftControllerFindAll().subscribe(
      data => this.listAircraft = data.data ?? []
    );
  }
        getAllTdDetail() {
    this.tdDetailService.tdDetailControllerFindAll().subscribe(
      data => this.listTdDetail = data.data ?? []
    );
  }
        getAllTechLog() {
    this.techLogService.techLogControllerFindAll().subscribe(
      data => this.listTechLog = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    complianceCMin: null,
  complianceCMax: null,
  complianceHMin: null,
  complianceHMax: null,
  compliteCMin: null,
  compliteCMax: null,
  compliteHMin: null,
  compliteHMax: null,
  idAircraft: null,
  idTdDetail: null,
  idTechLog: null,
  isActive: null
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
    search_field: string[] = ["complianceD","compliteD","compliteUser","engineer","isActive","noteClose","noteDetail"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            complianceCMin: null,
  complianceCMax: null,
  complianceHMin: null,
  complianceHMax: null,
  compliteCMin: null,
  compliteCMax: null,
  compliteHMin: null,
  compliteHMax: null,
  idAircraft: null,
  idTdDetail: null,
  idTechLog: null,
  isActive: null
        };
        this.filter.status_tdDetailAc = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_td_detail_ac`] = { isNotNull: 'aktif' };

        this.tdDetailAcReportService.tdDetailAcReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "aircraft": this.filterAircraft, type: 'inner'
                    },
                                        {
                        "td_detail": this.filterTdDetail, type: 'inner'
                    },
                                        {
                        "tech_log": this.filterTechLog, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "aircraft",
    "type": "single"
  },
  {
    "name": "td_detail",
    "type": "single"
  },
  {
    "name": "tech_log",
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
         { key: 'complianceC',  show: true },
              { key: 'complianceD',  show: true },
              { key: 'complianceH',  show: true },
              { key: 'compliteC',  show: true },
              { key: 'compliteD',  show: true },
              { key: 'compliteH',  show: true },
              { key: 'compliteUser',  show: true },
              { key: 'engineer',  show: true },
              { key: 'isActive',  show: true },
              { key: 'noteClose',  show: true },
              { key: 'noteDetail',  show: true },
              { key: 'updatedAt',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('tdDetailAc_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('tdDetailAc_columns');
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
                console.warn('Gagal parse tdDetailAc dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('td-detail-ac', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<TdDetailAcShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: TdDetailAcShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsTdDetailAcDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<TdDetailAcShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: TdDetailAcShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idTdDetailAc:data.idTdDetailAc
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