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
import { TechDefectReportService, TechDefectService } from 'src/sdk/core/services';
import { AmimsTechDefectDto } from 'src/sdk/core/models';
import { TechDefectShareAddComponent } from '../tech-defect-share-add/tech-defect-share-add.component';
import { TechDefectShareDetailComponent } from '../tech-defect-share-detail/tech-defect-share-detail.component';
import { AircraftService } from 'src/sdk/core/services';
import { EngineerRtiService } from 'src/sdk/core/services';
import { PartService } from 'src/sdk/core/services';
import { PartInstallService } from 'src/sdk/core/services';
import { TechLogService } from 'src/sdk/core/services';
 


@Component({
    selector: 'app-tech-defect-share-list',
    templateUrl: './tech-defect-share-list.component.html',
    styleUrl: './tech-defect-share-list.component.scss'
})
export class TechDefectShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idAircraft') idAircraft: string | null  = null;
     
    @Input('idEngineerRti') idEngineerRti: string | null  = null;
     
    @Input('idPart') idPart: string | null  = null;
     
    @Input('idPartInstall') idPartInstall: string | null  = null;
     
    @Input('idTechLog') idTechLog: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private techDefectReportService: TechDefectReportService,
        private techDefectService: TechDefectService,
        private tokenService: TokenService,

                        private aircraftService: AircraftService,
                private engineerRtiService: EngineerRtiService,
                private partService: PartService,
                private partInstallService: PartInstallService,
                private techLogService: TechLogService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_techDefect = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idAircraft)
            {
                this.filterAircraft.idAircraft = this.idAircraft
            }
            
           
            if (changes.idEngineerRti)
            {
                this.filterEngineerRti.idEngineerRti = this.idEngineerRti
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

                            this.getAllAircraft();
                    this.getAllEngineerRti();
                    this.getAllPart();
                    this.getAllPartInstall();
                    this.getAllTechLog();
                    }

    
    listAircraft: any[] = []; 
    
    listEngineerRti: any[] = []; 
    
    listPart: any[] = []; 
    
    listPartInstall: any[] = []; 
    
    listTechLog: any[] = []; 
    
    //untuak filter dari prent
    
    filterAircraft:any = {} 
    
    filterEngineerRti:any = {} 
    
    filterPart:any = {} 
    
    filterPartInstall:any = {} 
    
    filterTechLog:any = {} 
    

    // untuk fungsi get ALL relation
            getAllAircraft() {
    this.aircraftService.aircraftControllerFindAll().subscribe(
      data => this.listAircraft = data.data ?? []
    );
  }
        getAllEngineerRti() {
    this.engineerRtiService.engineerRtiControllerFindAll().subscribe(
      data => this.listEngineerRti = data.data ?? []
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
    dateDefectRange: null,
  doneCycleMin: null,
  doneCycleMax: null,
  doneDateRange: null,
  doneHoursMin: null,
  doneHoursMax: null,
  idAircraft: null,
  idEngineerRti: null,
  idPart: null,
  idPartInstall: null,
  idTechLog: null
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
    search_field: string[] = ["doneDate","noteDefect","userSign"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateDefectRange: null,
  doneCycleMin: null,
  doneCycleMax: null,
  doneDateRange: null,
  doneHoursMin: null,
  doneHoursMax: null,
  idAircraft: null,
  idEngineerRti: null,
  idPart: null,
  idPartInstall: null,
  idTechLog: null
        };
        this.filter.status_techDefect = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_tech_defect`] = { isNotNull: 'aktif' };

        this.techDefectReportService.techDefectReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "aircraft": this.filterAircraft, type: 'inner'
                    },
                                        {
                        "engineer_rti": this.filterEngineerRti, type: 'inner'
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
    "name": "aircraft",
    "type": "single"
  },
  {
    "name": "engineer_rti",
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
         { key: 'createdAt',  show: true },
              { key: 'dateDefect',  show: true },
              { key: 'doneCycle',  show: true },
              { key: 'doneDate',  show: true },
              { key: 'doneHours',  show: true },
              { key: 'noteDefect',  show: true },
              { key: 'statusDefect',  show: true },
              { key: 'updatedAt',  show: true },
              { key: 'userSign',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('techDefect_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('techDefect_columns');
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
                console.warn('Gagal parse techDefect dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('tech-defect', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<TechDefectShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: TechDefectShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsTechDefectDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<TechDefectShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: TechDefectShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idTechDefect:data.idTechDefect
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