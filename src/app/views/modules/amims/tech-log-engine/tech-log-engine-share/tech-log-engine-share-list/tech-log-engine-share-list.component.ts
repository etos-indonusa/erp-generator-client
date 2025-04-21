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
import { TechLogEngineReportService, TechLogEngineService } from 'src/sdk/core/services';
import { AmimsTechLogEngineDto } from 'src/sdk/core/models';
import { TechLogEngineShareAddComponent } from '../tech-log-engine-share-add/tech-log-engine-share-add.component';
import { TechLogEngineShareDetailComponent } from '../tech-log-engine-share-detail/tech-log-engine-share-detail.component';
import { PartService } from 'src/sdk/core/services';
import { TechLogService } from 'src/sdk/core/services';
 


@Component({
    selector: 'app-tech-log-engine-share-list',
    templateUrl: './tech-log-engine-share-list.component.html',
    styleUrl: './tech-log-engine-share-list.component.scss'
})
export class TechLogEngineShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idPart') idPart: string | null  = null;
     
    @Input('idTechLog') idTechLog: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private techLogEngineReportService: TechLogEngineReportService,
        private techLogEngineService: TechLogEngineService,
        private tokenService: TokenService,

                        private partService: PartService,
                private techLogService: TechLogService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_techLogEngine = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idPart)
            {
                this.filterPart.idPart = this.idPart
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

                            this.getAllPart();
                    this.getAllTechLog();
                    }

    
    listPart: any[] = []; 
    
    listTechLog: any[] = []; 
    
    //untuak filter dari prent
    
    filterPart:any = {} 
    
    filterTechLog:any = {} 
    

    // untuk fungsi get ALL relation
            getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        getAllTechLog() {
    this.techLogService.techLogControllerFindAll().subscribe(
      data => this.listTechLog = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    cycleBfMin: null,
  cycleBfMax: null,
  cycleCfMin: null,
  cycleCfMax: null,
  cycleFlightMin: null,
  cycleFlightMax: null,
  fullCycleBfMin: null,
  fullCycleBfMax: null,
  fullCycleFltMin: null,
  fullCycleFltMax: null,
  hoursBfMin: null,
  hoursBfMax: null,
  hoursCfMin: null,
  hoursCfMax: null,
  hoursFlightMin: null,
  hoursFlightMax: null,
  idPart: null,
  idTechLog: null,
  n1Min: null,
  n1Max: null,
  n2Min: null,
  n2Max: null,
  oilAddMin: null,
  oilAddMax: null,
  oilTotalMin: null,
  oilTotalMax: null,
  partCycleBfMin: null,
  partCycleBfMax: null,
  partCycleFltMin: null,
  partCycleFltMax: null,
  timeAboveBfMin: null,
  timeAboveBfMax: null,
  timeAboveFltMin: null,
  timeAboveFltMax: null,
  validasiMin: null,
  validasiMax: null
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
    search_field: string[] = ["oil","oldId","sn"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            cycleBfMin: null,
  cycleBfMax: null,
  cycleCfMin: null,
  cycleCfMax: null,
  cycleFlightMin: null,
  cycleFlightMax: null,
  fullCycleBfMin: null,
  fullCycleBfMax: null,
  fullCycleFltMin: null,
  fullCycleFltMax: null,
  hoursBfMin: null,
  hoursBfMax: null,
  hoursCfMin: null,
  hoursCfMax: null,
  hoursFlightMin: null,
  hoursFlightMax: null,
  idPart: null,
  idTechLog: null,
  n1Min: null,
  n1Max: null,
  n2Min: null,
  n2Max: null,
  oilAddMin: null,
  oilAddMax: null,
  oilTotalMin: null,
  oilTotalMax: null,
  partCycleBfMin: null,
  partCycleBfMax: null,
  partCycleFltMin: null,
  partCycleFltMax: null,
  timeAboveBfMin: null,
  timeAboveBfMax: null,
  timeAboveFltMin: null,
  timeAboveFltMax: null,
  validasiMin: null,
  validasiMax: null
        };
        this.filter.status_techLogEngine = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_tech_log_engine`] = { isNotNull: 'aktif' };

        this.techLogEngineReportService.techLogEngineReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "part": this.filterPart, type: 'inner'
                    },
                                        {
                        "tech_log": this.filterTechLog, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "part",
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
         { key: 'cycleBf',  show: true },
              { key: 'cycleCf',  show: true },
              { key: 'cycleFlight',  show: true },
              { key: 'fullCycleBf',  show: true },
              { key: 'fullCycleFlt',  show: true },
              { key: 'hoursBf',  show: true },
              { key: 'hoursCf',  show: true },
              { key: 'hoursFlight',  show: true },
              { key: 'n1',  show: true },
              { key: 'n2',  show: true },
              { key: 'oil',  show: true },
              { key: 'oilAdd',  show: true },
              { key: 'oilTotal',  show: true },
              { key: 'oldId',  show: true },
              { key: 'partCycleBf',  show: true },
              { key: 'partCycleFlt',  show: true },
              { key: 'sn',  show: true },
              { key: 'timeAboveBf',  show: true },
              { key: 'timeAboveFlt',  show: true },
              { key: 'validasi',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('techLogEngine_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('techLogEngine_columns');
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
                console.warn('Gagal parse techLogEngine dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('tech-log-engine', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<TechLogEngineShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: TechLogEngineShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsTechLogEngineDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<TechLogEngineShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: TechLogEngineShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idTechLogEngine:data.idTechLogEngine
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