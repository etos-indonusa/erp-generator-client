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
import { LogTsnTsoReportService, LogTsnTsoService } from 'de-sdk-core/lib/services';
import { AmimsLogTsnTsoDto } from 'de-sdk-core/lib/models';
import { LogTsnTsoShareAddComponent } from '../log-tsn-tso-share-add/log-tsn-tso-share-add.component';
import { LogTsnTsoShareDetailComponent } from '../log-tsn-tso-share-detail/log-tsn-tso-share-detail.component';
import { PartService } from 'de-sdk-core/lib/services';
import { TechLogService } from 'de-sdk-core/lib/services';
 


@Component({
    selector: 'app-log-tsn-tso-share-list',
    templateUrl: './log-tsn-tso-share-list.component.html',
    styleUrl: './log-tsn-tso-share-list.component.scss'
})
export class LogTsnTsoShareListComponent {
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
        private logTsnTsoReportService: LogTsnTsoReportService,
        private logTsnTsoService: LogTsnTsoService,
        private tokenService: TokenService,

                        private partService: PartService,
                private techLogService: TechLogService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_logTsnTso = this.status == 'semua' ? null : this.status;

            
           
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
    cycleMin: null,
  cycleMax: null,
  hoursMin: null,
  hoursMax: null,
  idPart: null,
  idTechLog: null,
  tsnCMin: null,
  tsnCMax: null,
  tsnHMin: null,
  tsnHMax: null,
  tsoCMin: null,
  tsoCMax: null,
  tsoHMin: null,
  tsoHMax: null
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
    search_field: string[] = ["batasId"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            cycleMin: null,
  cycleMax: null,
  hoursMin: null,
  hoursMax: null,
  idPart: null,
  idTechLog: null,
  tsnCMin: null,
  tsnCMax: null,
  tsnHMin: null,
  tsnHMax: null,
  tsoCMin: null,
  tsoCMax: null,
  tsoHMin: null,
  tsoHMax: null
        };
        this.filter.status_logTsnTso = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_log_tsn_tso`] = { isNotNull: 'aktif' };

        this.logTsnTsoReportService.logTsnTsoReportControllerFindAll({
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
         { key: 'batasId',  show: true },
              { key: 'createdAt',  show: true },
              { key: 'cycle',  show: true },
              { key: 'hours',  show: true },
              { key: 'tsnC',  show: true },
              { key: 'tsnH',  show: true },
              { key: 'tsoC',  show: true },
              { key: 'tsoH',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('logTsnTso_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('logTsnTso_columns');
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
                console.warn('Gagal parse logTsnTso dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('log-tsn-tso', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<LogTsnTsoShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: LogTsnTsoShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsLogTsnTsoDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<LogTsnTsoShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: LogTsnTsoShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idLogTsnTso:data.idLogTsnTso
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