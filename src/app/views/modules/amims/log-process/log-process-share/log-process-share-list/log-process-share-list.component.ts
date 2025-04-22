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
import { LogProcessReportService, LogProcessService } from 'de-sdk-core/services';
import { AmimsLogProcessDto } from 'de-sdk-core/models';
import { LogProcessShareAddComponent } from '../log-process-share-add/log-process-share-add.component';
import { LogProcessShareDetailComponent } from '../log-process-share-detail/log-process-share-detail.component';
import { MpartService } from 'de-sdk-core/services';
import { PartService } from 'de-sdk-core/services';
import { PartInstallService } from 'de-sdk-core/services';
import { TechLogService } from 'de-sdk-core/services';
 


@Component({
    selector: 'app-log-process-share-list',
    templateUrl: './log-process-share-list.component.html',
    styleUrl: './log-process-share-list.component.scss'
})
export class LogProcessShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idMpart') idMpart: string | null  = null;
     
    @Input('idPart') idPart: string | null  = null;
     
    @Input('idPartInstall') idPartInstall: string | null  = null;
     
    @Input('idTechLog') idTechLog: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private logProcessReportService: LogProcessReportService,
        private logProcessService: LogProcessService,
        private tokenService: TokenService,

                        private mpartService: MpartService,
                private partService: PartService,
                private partInstallService: PartInstallService,
                private techLogService: TechLogService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_logProcess = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idMpart)
            {
                this.filterMpart.idMpart = this.idMpart
            }
            
           
            if (changes.idPart)
            {
                this.filterPart.idPart = this.idPart
            }
            
           
            if (changes.idPartInstall)
            {
                this.filterPartInstall.idPartInstall = this.idPartInstall
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

                            this.getAllMpart();
                    this.getAllPart();
                    this.getAllPartInstall();
                    this.getAllTechLog();
                    }

    
    listMpart: any[] = []; 
    
    listPart: any[] = []; 
    
    listPartInstall: any[] = []; 
    
    listTechLog: any[] = []; 
    
    //untuak filter dari prent
    
    filterMpart:any = {} 
    
    filterPart:any = {} 
    
    filterPartInstall:any = {} 
    
    filterTechLog:any = {} 
    

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
        getAllPartInstall() {
    this.partInstallService.partInstallControllerFindAll().subscribe(
      data => this.listPartInstall = data.data ?? []
    );
  }
        getAllTechLog() {
    this.techLogService.techLogControllerFindAll().subscribe(
      data => this.listTechLog = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    adj1Min: null,
  adj1Max: null,
  adj2Min: null,
  adj2Max: null,
  adj3Min: null,
  adj3Max: null,
  bugIndexLogMin: null,
  bugIndexLogMax: null,
  cycleMin: null,
  cycleMax: null,
  cycleBfMin: null,
  cycleBfMax: null,
  cycleCfMin: null,
  cycleCfMax: null,
  cycleFlightMin: null,
  cycleFlightMax: null,
  factor1Min: null,
  factor1Max: null,
  factor2Min: null,
  factor2Max: null,
  factor3Min: null,
  factor3Max: null,
  fullCycleBfMin: null,
  fullCycleBfMax: null,
  fullCycleFltMin: null,
  fullCycleFltMax: null,
  hasUpdateMin: null,
  hasUpdateMax: null,
  hoistLeftMin: null,
  hoistLeftMax: null,
  hoistRightMin: null,
  hoistRightMax: null,
  hoistUsageMin: null,
  hoistUsageMax: null,
  hoursMin: null,
  hoursMax: null,
  hoursBfMin: null,
  hoursBfMax: null,
  hoursCfMin: null,
  hoursCfMax: null,
  hoursFlightMin: null,
  hoursFlightMax: null,
  idMpart: null,
  idPart: null,
  idPartInstall: null,
  idTechLog: null,
  landingsMin: null,
  landingsMax: null,
  n1Min: null,
  n1Max: null,
  n2Min: null,
  n2Max: null,
  partCycleBfMin: null,
  partCycleBfMax: null,
  partCycleFltMin: null,
  partCycleFltMax: null,
  timeAboveBfMin: null,
  timeAboveBfMax: null,
  timeAboveFltMin: null,
  timeAboveFltMax: null,
  tsnCycleMin: null,
  tsnCycleMax: null,
  tsnHoursMin: null,
  tsnHoursMax: null,
  useHoistLeftMin: null,
  useHoistLeftMax: null,
  useHoistRightMin: null,
  useHoistRightMax: null,
  xcycleInputMin: null,
  xcycleInputMax: null
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
    search_field: string[] = ["calculatedCycle","calculatedHours","cgPenalti","hasFor","hoistOperation","parent","rumusCycle","rumusHours","sn"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            adj1Min: null,
  adj1Max: null,
  adj2Min: null,
  adj2Max: null,
  adj3Min: null,
  adj3Max: null,
  bugIndexLogMin: null,
  bugIndexLogMax: null,
  cycleMin: null,
  cycleMax: null,
  cycleBfMin: null,
  cycleBfMax: null,
  cycleCfMin: null,
  cycleCfMax: null,
  cycleFlightMin: null,
  cycleFlightMax: null,
  factor1Min: null,
  factor1Max: null,
  factor2Min: null,
  factor2Max: null,
  factor3Min: null,
  factor3Max: null,
  fullCycleBfMin: null,
  fullCycleBfMax: null,
  fullCycleFltMin: null,
  fullCycleFltMax: null,
  hasUpdateMin: null,
  hasUpdateMax: null,
  hoistLeftMin: null,
  hoistLeftMax: null,
  hoistRightMin: null,
  hoistRightMax: null,
  hoistUsageMin: null,
  hoistUsageMax: null,
  hoursMin: null,
  hoursMax: null,
  hoursBfMin: null,
  hoursBfMax: null,
  hoursCfMin: null,
  hoursCfMax: null,
  hoursFlightMin: null,
  hoursFlightMax: null,
  idMpart: null,
  idPart: null,
  idPartInstall: null,
  idTechLog: null,
  landingsMin: null,
  landingsMax: null,
  n1Min: null,
  n1Max: null,
  n2Min: null,
  n2Max: null,
  partCycleBfMin: null,
  partCycleBfMax: null,
  partCycleFltMin: null,
  partCycleFltMax: null,
  timeAboveBfMin: null,
  timeAboveBfMax: null,
  timeAboveFltMin: null,
  timeAboveFltMax: null,
  tsnCycleMin: null,
  tsnCycleMax: null,
  tsnHoursMin: null,
  tsnHoursMax: null,
  useHoistLeftMin: null,
  useHoistLeftMax: null,
  useHoistRightMin: null,
  useHoistRightMax: null,
  xcycleInputMin: null,
  xcycleInputMax: null
        };
        this.filter.status_logProcess = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_log_process`] = { isNotNull: 'aktif' };

        this.logProcessReportService.logProcessReportControllerFindAll({
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
                        "part_install": this.filterPartInstall, type: 'inner'
                    },
                                        {
                        "tech_log": this.filterTechLog, type: 'inner'
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
    "name": "part_install",
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
         { key: 'adj1',  show: true },
              { key: 'adj2',  show: true },
              { key: 'adj3',  show: true },
              { key: 'bugIndexLog',  show: true },
              { key: 'calculatedCycle',  show: true },
              { key: 'calculatedHours',  show: true },
              { key: 'cgPenalti',  show: true },
              { key: 'cycle',  show: true },
              { key: 'cycleBf',  show: true },
              { key: 'cycleCf',  show: true },
              { key: 'cycleFlight',  show: true },
              { key: 'factor1',  show: true },
              { key: 'factor2',  show: true },
              { key: 'factor3',  show: true },
              { key: 'fullCycleBf',  show: true },
              { key: 'fullCycleFlt',  show: true },
              { key: 'hasFor',  show: true },
              { key: 'hasUpdate',  show: true },
              { key: 'hoistLeft',  show: true },
              { key: 'hoistOperation',  show: true },
              { key: 'hoistRight',  show: true },
              { key: 'hoistUsage',  show: true },
              { key: 'hours',  show: true },
              { key: 'hoursBf',  show: true },
              { key: 'hoursCf',  show: true },
              { key: 'hoursFlight',  show: true },
              { key: 'landings',  show: true },
              { key: 'n1',  show: true },
              { key: 'n2',  show: true },
              { key: 'parent',  show: true },
              { key: 'partCycleBf',  show: true },
              { key: 'partCycleFlt',  show: true },
              { key: 'rumusCycle',  show: true },
              { key: 'rumusHours',  show: true },
              { key: 'sn',  show: true },
              { key: 'timeAboveBf',  show: true },
              { key: 'timeAboveFlt',  show: true },
              { key: 'tsnCycle',  show: true },
              { key: 'tsnHours',  show: true },
              { key: 'useHoistLeft',  show: true },
              { key: 'useHoistRight',  show: true },
              { key: 'xcycleInput',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('logProcess_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('logProcess_columns');
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
                console.warn('Gagal parse logProcess dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('log-process', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<LogProcessShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: LogProcessShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsLogProcessDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<LogProcessShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: LogProcessShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idLogProcess:data.idLogProcess
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