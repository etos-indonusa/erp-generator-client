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
import { TechLogEngineCheckReportService, TechLogEngineCheckService } from 'src/sdk/core/services';
import { AmimsTechLogEngineCheckDto } from 'src/sdk/core/models';
import { TechLogEngineCheckShareAddComponent } from '../tech-log-engine-check-share-add/tech-log-engine-check-share-add.component';
import { TechLogEngineCheckShareDetailComponent } from '../tech-log-engine-check-share-detail/tech-log-engine-check-share-detail.component';
import { TechLogService } from 'src/sdk/core/services';
import { TechLogEngineService } from 'src/sdk/core/services';
 


@Component({
    selector: 'app-tech-log-engine-check-share-list',
    templateUrl: './tech-log-engine-check-share-list.component.html',
    styleUrl: './tech-log-engine-check-share-list.component.scss'
})
export class TechLogEngineCheckShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idTechLog') idTechLog: string | null  = null;
     
    @Input('idTechLogEngine') idTechLogEngine: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private techLogEngineCheckReportService: TechLogEngineCheckReportService,
        private techLogEngineCheckService: TechLogEngineCheckService,
        private tokenService: TokenService,

                        private techLogService: TechLogService,
                private techLogEngineService: TechLogEngineService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_techLogEngineCheck = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idTechLog)
            {
                this.filterTechLog.idTechLog = this.idTechLog
            }
            
           
            if (changes.idTechLogEngine)
            {
                this.filterTechLogEngine.idTechLogEngine = this.idTechLogEngine
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllTechLog();
                    this.getAllTechLogEngine();
                    }

    
    listTechLog: any[] = []; 
    
    listTechLogEngine: any[] = []; 
    
    //untuak filter dari prent
    
    filterTechLog:any = {} 
    
    filterTechLogEngine:any = {} 
    

    // untuk fungsi get ALL relation
            getAllTechLog() {
    this.techLogService.techLogControllerFindAll().subscribe(
      data => this.listTechLog = data.data ?? []
    );
  }
        getAllTechLogEngine() {
    this.techLogEngineService.techLogEngineControllerFindAll().subscribe(
      data => this.listTechLogEngine = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    altMin: null,
  altMax: null,
  idTechLog: null,
  idTechLogEngine: null,
  ittMin: null,
  ittMax: null,
  n1Min: null,
  n1Max: null,
  n2Min: null,
  n2Max: null,
  nrMin: null,
  nrMax: null,
  oatMin: null,
  oatMax: null,
  oilPressMin: null,
  oilPressMax: null,
  oilTempMin: null,
  oilTempMax: null,
  powerMarginMin: null,
  powerMarginMax: null,
  speedMin: null,
  speedMax: null,
  t5Min: null,
  t5Max: null,
  torqueMin: null,
  torqueMax: null
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
            altMin: null,
  altMax: null,
  idTechLog: null,
  idTechLogEngine: null,
  ittMin: null,
  ittMax: null,
  n1Min: null,
  n1Max: null,
  n2Min: null,
  n2Max: null,
  nrMin: null,
  nrMax: null,
  oatMin: null,
  oatMax: null,
  oilPressMin: null,
  oilPressMax: null,
  oilTempMin: null,
  oilTempMax: null,
  powerMarginMin: null,
  powerMarginMax: null,
  speedMin: null,
  speedMax: null,
  t5Min: null,
  t5Max: null,
  torqueMin: null,
  torqueMax: null
        };
        this.filter.status_techLogEngineCheck = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_tech_log_engine_check`] = { isNotNull: 'aktif' };

        this.techLogEngineCheckReportService.techLogEngineCheckReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "tech_log": this.filterTechLog, type: 'inner'
                    },
                                        {
                        "tech_log_engine": this.filterTechLogEngine, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "tech_log",
    "type": "single"
  },
  {
    "name": "tech_log_engine",
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
         { key: 'alt',  show: true },
              { key: 'itt',  show: true },
              { key: 'n1',  show: true },
              { key: 'n2',  show: true },
              { key: 'nr',  show: true },
              { key: 'oat',  show: true },
              { key: 'oilPress',  show: true },
              { key: 'oilTemp',  show: true },
              { key: 'powerMargin',  show: true },
              { key: 'speed',  show: true },
              { key: 't5',  show: true },
              { key: 'torque',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('techLogEngineCheck_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('techLogEngineCheck_columns');
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
                console.warn('Gagal parse techLogEngineCheck dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('tech-log-engine-check', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<TechLogEngineCheckShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: TechLogEngineCheckShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsTechLogEngineCheckDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<TechLogEngineCheckShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: TechLogEngineCheckShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idTechLogEngineCheck:data.idTechLogEngineCheck
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