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
import { EngineerRtiReportService, EngineerRtiService } from 'src/sdk/core/services';
import { AmimsEngineerRtiDto } from 'src/sdk/core/models';
import { EngineerRtiShareAddComponent } from '../engineer-rti-share-add/engineer-rti-share-add.component';
import { EngineerRtiShareDetailComponent } from '../engineer-rti-share-detail/engineer-rti-share-detail.component';
import { AircraftService } from 'src/sdk/core/services';
import { MpcJoService } from 'src/sdk/core/services';
import { PartService } from 'src/sdk/core/services';
import { PartInstallService } from 'src/sdk/core/services';
import { SiteService } from 'src/sdk/core/services';
 


@Component({
    selector: 'app-engineer-rti-share-list',
    templateUrl: './engineer-rti-share-list.component.html',
    styleUrl: './engineer-rti-share-list.component.scss'
})
export class EngineerRtiShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idAircraft') idAircraft: string | null  = null;
     
    @Input('idMpcJo') idMpcJo: string | null  = null;
     
    @Input('idPart') idPart: string | null  = null;
     
    @Input('idPartInstall') idPartInstall: string | null  = null;
     
    @Input('idSite') idSite: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private engineerRtiReportService: EngineerRtiReportService,
        private engineerRtiService: EngineerRtiService,
        private tokenService: TokenService,

                        private aircraftService: AircraftService,
                private mpcJoService: MpcJoService,
                private partService: PartService,
                private partInstallService: PartInstallService,
                private siteService: SiteService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_engineerRti = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idAircraft)
            {
                this.filterAircraft.idAircraft = this.idAircraft
            }
            
           
            if (changes.idMpcJo)
            {
                this.filterMpcJo.idMpcJo = this.idMpcJo
            }
            
           
            if (changes.idPart)
            {
                this.filterPart.idPart = this.idPart
            }
            
           
            if (changes.idPartInstall)
            {
                this.filterPartInstall.idPartInstall = this.idPartInstall
            }
            
           
            if (changes.idSite)
            {
                this.filterSite.idSite = this.idSite
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllAircraft();
                    this.getAllMpcJo();
                    this.getAllPart();
                    this.getAllPartInstall();
                    this.getAllSite();
                    }

    
    listAircraft: any[] = []; 
    
    listMpcJo: any[] = []; 
    
    listPart: any[] = []; 
    
    listPartInstall: any[] = []; 
    
    listSite: any[] = []; 
    
    //untuak filter dari prent
    
    filterAircraft:any = {} 
    
    filterMpcJo:any = {} 
    
    filterPart:any = {} 
    
    filterPartInstall:any = {} 
    
    filterSite:any = {} 
    

    // untuk fungsi get ALL relation
            getAllAircraft() {
    this.aircraftService.aircraftControllerFindAll().subscribe(
      data => this.listAircraft = data.data ?? []
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
        getAllPartInstall() {
    this.partInstallService.partInstallControllerFindAll().subscribe(
      data => this.listPartInstall = data.data ?? []
    );
  }
        getAllSite() {
    this.siteService.siteControllerFindAll().subscribe(
      data => this.listSite = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    dateRtiRange: null,
  dispotitionMin: null,
  dispotitionMax: null,
  idAircraft: null,
  idMpcJo: null,
  idPart: null,
  idPartInstall: null,
  idSite: null,
  inspectedByMin: null,
  inspectedByMax: null,
  receivedByMin: null,
  receivedByMax: null,
  remainingHoursMin: null,
  remainingHoursMax: null,
  returnByMin: null,
  returnByMax: null,
  tsnCycleMin: null,
  tsnCycleMax: null,
  tsnCycleParentMin: null,
  tsnCycleParentMax: null,
  tsnHoursMin: null,
  tsnHoursMax: null,
  tsnHoursParentMin: null,
  tsnHoursParentMax: null,
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
    search_field: string[] = ["base","hasPris","hashProcess","hashRpd","hashTechLog","numberRti","reason","remarkDisposisi","tsnVar","tsoVar","typeRti"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateRtiRange: null,
  dispotitionMin: null,
  dispotitionMax: null,
  idAircraft: null,
  idMpcJo: null,
  idPart: null,
  idPartInstall: null,
  idSite: null,
  inspectedByMin: null,
  inspectedByMax: null,
  receivedByMin: null,
  receivedByMax: null,
  remainingHoursMin: null,
  remainingHoursMax: null,
  returnByMin: null,
  returnByMax: null,
  tsnCycleMin: null,
  tsnCycleMax: null,
  tsnCycleParentMin: null,
  tsnCycleParentMax: null,
  tsnHoursMin: null,
  tsnHoursMax: null,
  tsnHoursParentMin: null,
  tsnHoursParentMax: null,
  tsnValMin: null,
  tsnValMax: null,
  tsoCycleMin: null,
  tsoCycleMax: null,
  tsoHoursMin: null,
  tsoHoursMax: null,
  tsoValMin: null,
  tsoValMax: null
        };
        this.filter.status_engineerRti = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_engineer_rti`] = { isNotNull: 'aktif' };

        this.engineerRtiReportService.engineerRtiReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "aircraft": this.filterAircraft, type: 'inner'
                    },
                                        {
                        "mpc_jo": this.filterMpcJo, type: 'inner'
                    },
                                        {
                        "part": this.filterPart, type: 'inner'
                    },
                                        {
                        "part_install": this.filterPartInstall, type: 'inner'
                    },
                                        {
                        "site": this.filterSite, type: 'inner'
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
    "name": "mpc_jo",
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
    "name": "site",
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
         { key: 'base',  show: true },
              { key: 'createdAt',  show: true },
              { key: 'dateRti',  show: true },
              { key: 'dispotition',  show: true },
              { key: 'hasPris',  show: true },
              { key: 'hashProcess',  show: true },
              { key: 'hashRpd',  show: true },
              { key: 'hashTechLog',  show: true },
              { key: 'inspectedBy',  show: true },
              { key: 'numberRti',  show: true },
              { key: 'reason',  show: true },
              { key: 'receivedBy',  show: true },
              { key: 'remainingHours',  show: true },
              { key: 'remarkDisposisi',  show: true },
              { key: 'returnBy',  show: true },
              { key: 'statusRti',  show: true },
              { key: 'statusService',  show: true },
              { key: 'tsnCycle',  show: true },
              { key: 'tsnCycleParent',  show: true },
              { key: 'tsnHours',  show: true },
              { key: 'tsnHoursParent',  show: true },
              { key: 'tsnVal',  show: true },
              { key: 'tsnVar',  show: true },
              { key: 'tsoCycle',  show: true },
              { key: 'tsoHours',  show: true },
              { key: 'tsoVal',  show: true },
              { key: 'tsoVar',  show: true },
              { key: 'typeRti',  show: true },
              { key: 'updatedAt',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('engineerRti_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('engineerRti_columns');
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
                console.warn('Gagal parse engineerRti dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('engineer-rti', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<EngineerRtiShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: EngineerRtiShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsEngineerRtiDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<EngineerRtiShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: EngineerRtiShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idEngineerRti:data.idEngineerRti
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