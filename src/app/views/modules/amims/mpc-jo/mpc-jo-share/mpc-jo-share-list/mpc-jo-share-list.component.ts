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
import { MpcJoReportService, MpcJoService } from 'de-sdk-core/lib/services';
import { AmimsMpcJoDto } from 'de-sdk-core/lib/models';
import { MpcJoShareAddComponent } from '../mpc-jo-share-add/mpc-jo-share-add.component';
import { MpcJoShareDetailComponent } from '../mpc-jo-share-detail/mpc-jo-share-detail.component';
import { DueListService } from 'de-sdk-core/lib/services';
import { MaintenanceService } from 'de-sdk-core/lib/services';
import { PartService } from 'de-sdk-core/lib/services';
import { TechLogService } from 'de-sdk-core/lib/services';
import { TypeOfworkService } from 'de-sdk-core/lib/services';
import { UsersService } from 'de-sdk-core/lib/services';
 


@Component({
    selector: 'app-mpc-jo-share-list',
    templateUrl: './mpc-jo-share-list.component.html',
    styleUrl: './mpc-jo-share-list.component.scss'
})
export class MpcJoShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idDueList') idDueList: string | null  = null;
     
    @Input('idMaintenance') idMaintenance: string | null  = null;
     
    @Input('idPart') idPart: string | null  = null;
     
    @Input('idTechLog') idTechLog: string | null  = null;
     
    @Input('idTypeOfwork') idTypeOfwork: string | null  = null;
     
    @Input('idUser') idUser: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private mpcJoReportService: MpcJoReportService,
        private mpcJoService: MpcJoService,
        private tokenService: TokenService,

                        private dueListService: DueListService,
                private maintenanceService: MaintenanceService,
                private partService: PartService,
                private techLogService: TechLogService,
                private typeOfworkService: TypeOfworkService,
                private usersService: UsersService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_mpcJo = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idDueList)
            {
                this.filterDueList.idDueList = this.idDueList
            }
            
           
            if (changes.idMaintenance)
            {
                this.filterMaintenance.idMaintenance = this.idMaintenance
            }
            
           
            if (changes.idPart)
            {
                this.filterPart.idPart = this.idPart
            }
            
           
            if (changes.idTechLog)
            {
                this.filterTechLog.idTechLog = this.idTechLog
            }
            
           
            if (changes.idTypeOfwork)
            {
                this.filterTypeOfwork.idTypeOfwork = this.idTypeOfwork
            }
            
           
            if (changes.idUser)
            {
                this.filterUser.idUser = this.idUser
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllDueList();
                    this.getAllMaintenance();
                    this.getAllPart();
                    this.getAllTechLog();
                    this.getAllTypeOfwork();
                    this.getAllUser();
                    }

    
    listDueList: any[] = []; 
    
    listMaintenance: any[] = []; 
    
    listPart: any[] = []; 
    
    listTechLog: any[] = []; 
    
    listTypeOfwork: any[] = []; 
    
    listUser: any[] = []; 
    
    //untuak filter dari prent
    
    filterDueList:any = {} 
    
    filterMaintenance:any = {} 
    
    filterPart:any = {} 
    
    filterTechLog:any = {} 
    
    filterTypeOfwork:any = {} 
    
    filterUser:any = {} 
    

    // untuk fungsi get ALL relation
            getAllDueList() {
    this.dueListService.dueListControllerFindAll().subscribe(
      data => this.listDueList = data.data ?? []
    );
  }
        getAllMaintenance() {
    this.maintenanceService.maintenanceControllerFindAll().subscribe(
      data => this.listMaintenance = data.data ?? []
    );
  }
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
        getAllTypeOfwork() {
    this.typeOfworkService.typeOfworkControllerFindAll().subscribe(
      data => this.listTypeOfwork = data.data ?? []
    );
  }
        getAllUser() {
    this.usersService.usersControllerFindAll().subscribe(
      data => this.listUser = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    compliteCycleMin: null,
  compliteCycleMax: null,
  compliteDateRange: null,
  compliteHoursMin: null,
  compliteHoursMax: null,
  cycleFromMin: null,
  cycleFromMax: null,
  cycleToMin: null,
  cycleToMax: null,
  dateJoRange: null,
  hourseFromMin: null,
  hourseFromMax: null,
  hourseToMin: null,
  hourseToMax: null,
  idDueList: null,
  idMaintenance: null,
  idPart: null,
  idTechLog: null,
  idTypeOfwork: null,
  idUser: null,
  isPriority: null,
  onSiteMin: null,
  onSiteMax: null,
  originalCycleMin: null,
  originalCycleMax: null,
  originalDateRange: null,
  originalHoursMin: null,
  originalHoursMax: null,
  timeRangeFromMin: null,
  timeRangeFromMax: null,
  timeRangeToMin: null,
  timeRangeToMax: null
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
    search_field: string[] = ["action","compliteDate","customIssued","customJob","customRef","isPriority","noteJo","numberJo","onAircraft","originalDate","parentAss","reference","roflag","workDue"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            compliteCycleMin: null,
  compliteCycleMax: null,
  compliteDateRange: null,
  compliteHoursMin: null,
  compliteHoursMax: null,
  cycleFromMin: null,
  cycleFromMax: null,
  cycleToMin: null,
  cycleToMax: null,
  dateJoRange: null,
  hourseFromMin: null,
  hourseFromMax: null,
  hourseToMin: null,
  hourseToMax: null,
  idDueList: null,
  idMaintenance: null,
  idPart: null,
  idTechLog: null,
  idTypeOfwork: null,
  idUser: null,
  isPriority: null,
  onSiteMin: null,
  onSiteMax: null,
  originalCycleMin: null,
  originalCycleMax: null,
  originalDateRange: null,
  originalHoursMin: null,
  originalHoursMax: null,
  timeRangeFromMin: null,
  timeRangeFromMax: null,
  timeRangeToMin: null,
  timeRangeToMax: null
        };
        this.filter.status_mpcJo = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_mpc_jo`] = { isNotNull: 'aktif' };

        this.mpcJoReportService.mpcJoReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "due_list": this.filterDueList, type: 'inner'
                    },
                                        {
                        "maintenance": this.filterMaintenance, type: 'inner'
                    },
                                        {
                        "part": this.filterPart, type: 'inner'
                    },
                                        {
                        "tech_log": this.filterTechLog, type: 'inner'
                    },
                                        {
                        "type_ofwork": this.filterTypeOfwork, type: 'inner'
                    },
                                        {
                        "user": this.filterUser, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "due_list",
    "type": "single"
  },
  {
    "name": "maintenance",
    "type": "single"
  },
  {
    "name": "part",
    "type": "single"
  },
  {
    "name": "tech_log",
    "type": "single"
  },
  {
    "name": "type_ofwork",
    "type": "single"
  },
  {
    "name": "user",
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
         { key: 'action',  show: true },
              { key: 'compliteCycle',  show: true },
              { key: 'compliteDate',  show: true },
              { key: 'compliteHours',  show: true },
              { key: 'createdAt',  show: true },
              { key: 'customIssued',  show: true },
              { key: 'customJob',  show: true },
              { key: 'customRef',  show: true },
              { key: 'cycleFrom',  show: true },
              { key: 'cycleTo',  show: true },
              { key: 'dateJo',  show: true },
              { key: 'hourseFrom',  show: true },
              { key: 'hourseTo',  show: true },
              { key: 'isPriority',  show: true },
              { key: 'noteJo',  show: true },
              { key: 'numberJo',  show: true },
              { key: 'onAircraft',  show: true },
              { key: 'onSite',  show: true },
              { key: 'originalCycle',  show: true },
              { key: 'originalDate',  show: true },
              { key: 'originalHours',  show: true },
              { key: 'parentAss',  show: true },
              { key: 'reference',  show: true },
              { key: 'roflag',  show: true },
              { key: 'statusJo',  show: true },
              { key: 'timeRangeFrom',  show: true },
              { key: 'timeRangeTo',  show: true },
              { key: 'updatedAt',  show: true },
              { key: 'workDue',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('mpcJo_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('mpcJo_columns');
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
                console.warn('Gagal parse mpcJo dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('mpc-jo', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<MpcJoShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: MpcJoShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsMpcJoDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<MpcJoShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: MpcJoShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idMpcJo:data.idMpcJo
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