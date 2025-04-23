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
import { LastMaintenanceReportService, LastMaintenanceService } from 'de-sdk-core/lib/services';
import { AmimsLastMaintenanceDto } from 'de-sdk-core/lib/models';
import { LastMaintenanceShareAddComponent } from '../last-maintenance-share-add/last-maintenance-share-add.component';
import { LastMaintenanceShareDetailComponent } from '../last-maintenance-share-detail/last-maintenance-share-detail.component';
import { MaintenanceService } from 'de-sdk-core/lib/services';
import { MpcJoService } from 'de-sdk-core/lib/services';
import { PartService } from 'de-sdk-core/lib/services';
import { UsersService } from 'de-sdk-core/lib/services';
 


@Component({
    selector: 'app-last-maintenance-share-list',
    templateUrl: './last-maintenance-share-list.component.html',
    styleUrl: './last-maintenance-share-list.component.scss'
})
export class LastMaintenanceShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idMaintenance') idMaintenance: string | null  = null;
     
    @Input('idMpcJo') idMpcJo: string | null  = null;
     
    @Input('idPart') idPart: string | null  = null;
     
    @Input('idUser') idUser: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private lastMaintenanceReportService: LastMaintenanceReportService,
        private lastMaintenanceService: LastMaintenanceService,
        private tokenService: TokenService,

                        private maintenanceService: MaintenanceService,
                private mpcJoService: MpcJoService,
                private partService: PartService,
                private usersService: UsersService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_lastMaintenance = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idMaintenance)
            {
                this.filterMaintenance.idMaintenance = this.idMaintenance
            }
            
           
            if (changes.idMpcJo)
            {
                this.filterMpcJo.idMpcJo = this.idMpcJo
            }
            
           
            if (changes.idPart)
            {
                this.filterPart.idPart = this.idPart
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

                            this.getAllMaintenance();
                    this.getAllMpcJo();
                    this.getAllPart();
                    this.getAllUser();
                    }

    
    listMaintenance: any[] = []; 
    
    listMpcJo: any[] = []; 
    
    listPart: any[] = []; 
    
    listUser: any[] = []; 
    
    //untuak filter dari prent
    
    filterMaintenance:any = {} 
    
    filterMpcJo:any = {} 
    
    filterPart:any = {} 
    
    filterUser:any = {} 
    

    // untuk fungsi get ALL relation
            getAllMaintenance() {
    this.maintenanceService.maintenanceControllerFindAll().subscribe(
      data => this.listMaintenance = data.data ?? []
    );
  }
        getAllMpcJo() {
    this.mpcJoService.mpcJoControllerFindAll().subscribe(
      data => this.listMpcJo = data.data ?? []
    );
  }
        getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        getAllUser() {
    this.usersService.usersControllerFindAll().subscribe(
      data => this.listUser = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    idMaintenance: null,
  idMpcJo: null,
  idPart: null,
  idUser: null,
  lastCycleMin: null,
  lastCycleMax: null,
  lastDateRange: null,
  lastHoursMin: null,
  lastHoursMax: null,
  parentCycleMin: null,
  parentCycleMax: null,
  parentHoursMin: null,
  parentHoursMax: null,
  typeOfWorkMin: null,
  typeOfWorkMax: null
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
    search_field: string[] = ["lastDate","oldId"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idMaintenance: null,
  idMpcJo: null,
  idPart: null,
  idUser: null,
  lastCycleMin: null,
  lastCycleMax: null,
  lastDateRange: null,
  lastHoursMin: null,
  lastHoursMax: null,
  parentCycleMin: null,
  parentCycleMax: null,
  parentHoursMin: null,
  parentHoursMax: null,
  typeOfWorkMin: null,
  typeOfWorkMax: null
        };
        this.filter.status_lastMaintenance = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_last_maintenance`] = { isNotNull: 'aktif' };

        this.lastMaintenanceReportService.lastMaintenanceReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "maintenance": this.filterMaintenance, type: 'inner'
                    },
                                        {
                        "mpc_jo": this.filterMpcJo, type: 'inner'
                    },
                                        {
                        "part": this.filterPart, type: 'inner'
                    },
                                        {
                        "user": this.filterUser, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "maintenance",
    "type": "single"
  },
  {
    "name": "mpc_jo",
    "type": "single"
  },
  {
    "name": "part",
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
         { key: 'createdAt',  show: true },
              { key: 'lastCycle',  show: true },
              { key: 'lastDate',  show: true },
              { key: 'lastHours',  show: true },
              { key: 'oldId',  show: true },
              { key: 'parentCycle',  show: true },
              { key: 'parentHours',  show: true },
              { key: 'typeOfWork',  show: true },
              { key: 'updatedAt',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('lastMaintenance_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('lastMaintenance_columns');
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
                console.warn('Gagal parse lastMaintenance dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('last-maintenance', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<LastMaintenanceShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: LastMaintenanceShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsLastMaintenanceDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<LastMaintenanceShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: LastMaintenanceShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idLastMaintenance:data.idLastMaintenance
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