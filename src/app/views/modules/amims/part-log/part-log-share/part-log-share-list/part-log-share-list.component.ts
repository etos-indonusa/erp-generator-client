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
import { PartLogReportService, PartLogService } from 'src/sdk/core/services';
import { AmimsPartLogDto } from 'src/sdk/core/models';
import { PartLogShareAddComponent } from '../part-log-share-add/part-log-share-add.component';
import { PartLogShareDetailComponent } from '../part-log-share-detail/part-log-share-detail.component';
import { ModuleService } from 'src/sdk/core/services';
import { PartService } from 'src/sdk/core/services';
import { PositionService } from 'src/sdk/core/services';
import { SiteService } from 'src/sdk/core/services';
import { UsersService } from 'src/sdk/core/services';
 


@Component({
    selector: 'app-part-log-share-list',
    templateUrl: './part-log-share-list.component.html',
    styleUrl: './part-log-share-list.component.scss'
})
export class PartLogShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idModule') idModule: string | null  = null;
     
    @Input('idPart') idPart: string | null  = null;
     
    @Input('idPosition') idPosition: string | null  = null;
     
    @Input('idSite') idSite: string | null  = null;
     
    @Input('idUser') idUser: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private partLogReportService: PartLogReportService,
        private partLogService: PartLogService,
        private tokenService: TokenService,

                        private moduleService: ModuleService,
                private partService: PartService,
                private positionService: PositionService,
                private siteService: SiteService,
                private usersService: UsersService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_partLog = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idModule)
            {
                this.filterModule.idModule = this.idModule
            }
            
           
            if (changes.idPart)
            {
                this.filterPart.idPart = this.idPart
            }
            
           
            if (changes.idPosition)
            {
                this.filterPosition.idPosition = this.idPosition
            }
            
           
            if (changes.idSite)
            {
                this.filterSite.idSite = this.idSite
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

                            this.getAllModule();
                    this.getAllPart();
                    this.getAllPosition();
                    this.getAllSite();
                    this.getAllUser();
                    }

    
    listModule: any[] = []; 
    
    listPart: any[] = []; 
    
    listPosition: any[] = []; 
    
    listSite: any[] = []; 
    
    listUser: any[] = []; 
    
    //untuak filter dari prent
    
    filterModule:any = {} 
    
    filterPart:any = {} 
    
    filterPosition:any = {} 
    
    filterSite:any = {} 
    
    filterUser:any = {} 
    

    // untuk fungsi get ALL relation
            getAllModule() {
    this.moduleService.moduleControllerFindAll().subscribe(
      data => this.listModule = data.data ?? []
    );
  }
        getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        getAllPosition() {
    this.positionService.positionControllerFindAll().subscribe(
      data => this.listPosition = data.data ?? []
    );
  }
        getAllSite() {
    this.siteService.siteControllerFindAll().subscribe(
      data => this.listSite = data.data ?? []
    );
  }
        getAllUser() {
    this.usersService.usersControllerFindAll().subscribe(
      data => this.listUser = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    dateLogRange: null,
  idModule: null,
  idPart: null,
  idPosition: null,
  idSite: null,
  idUser: null,
  qtyLogMin: null,
  qtyLogMax: null,
  tboCycleMin: null,
  tboCycleMax: null,
  tboHoursMin: null,
  tboHoursMax: null,
  tboValMin: null,
  tboValMax: null,
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
  tsoValMax: null
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
    search_field: string[] = ["activity","fromModule","numberModule","oldId","tboVar","toLocation","tsnVar","tsoVar"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateLogRange: null,
  idModule: null,
  idPart: null,
  idPosition: null,
  idSite: null,
  idUser: null,
  qtyLogMin: null,
  qtyLogMax: null,
  tboCycleMin: null,
  tboCycleMax: null,
  tboHoursMin: null,
  tboHoursMax: null,
  tboValMin: null,
  tboValMax: null,
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
  tsoValMax: null
        };
        this.filter.status_partLog = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_part_log`] = { isNotNull: 'aktif' };

        this.partLogReportService.partLogReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "module": this.filterModule, type: 'inner'
                    },
                                        {
                        "part": this.filterPart, type: 'inner'
                    },
                                        {
                        "position": this.filterPosition, type: 'inner'
                    },
                                        {
                        "site": this.filterSite, type: 'inner'
                    },
                                        {
                        "user": this.filterUser, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "module",
    "type": "single"
  },
  {
    "name": "part",
    "type": "single"
  },
  {
    "name": "position",
    "type": "single"
  },
  {
    "name": "site",
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
         { key: 'activity',  show: true },
              { key: 'createdAt',  show: true },
              { key: 'dateLog',  show: true },
              { key: 'fromModule',  show: true },
              { key: 'numberModule',  show: true },
              { key: 'oldId',  show: true },
              { key: 'qtyLog',  show: true },
              { key: 'statusOnInventory',  show: true },
              { key: 'tboCycle',  show: true },
              { key: 'tboHours',  show: true },
              { key: 'tboVal',  show: true },
              { key: 'tboVar',  show: true },
              { key: 'toLocation',  show: true },
              { key: 'tsnCycle',  show: true },
              { key: 'tsnHours',  show: true },
              { key: 'tsnVal',  show: true },
              { key: 'tsnVar',  show: true },
              { key: 'tsoCycle',  show: true },
              { key: 'tsoHours',  show: true },
              { key: 'tsoVal',  show: true },
              { key: 'tsoVar',  show: true },
              { key: 'updatedAt',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('partLog_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('partLog_columns');
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
                console.warn('Gagal parse partLog dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('part-log', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<PartLogShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: PartLogShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsPartLogDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<PartLogShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: PartLogShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idPartLog:data.idPartLog
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