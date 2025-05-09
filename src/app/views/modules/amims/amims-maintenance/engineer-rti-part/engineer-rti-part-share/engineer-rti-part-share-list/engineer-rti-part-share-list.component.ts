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
import { EngineerRtiPartReportService, EngineerRtiPartService } from 'de-sdk-core';
import { AmimsEngineerRtiPartDto } from 'de-sdk-core';
import { EngineerRtiPartShareAddComponent } from '../engineer-rti-part-share-add/engineer-rti-part-share-add.component';
import { EngineerRtiPartShareDetailComponent } from '../engineer-rti-part-share-detail/engineer-rti-part-share-detail.component';
import { EngineerRtiService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { PartInstallService } from 'de-sdk-core';
 


@Component({
    selector: 'app-engineer-rti-part-share-list',
    templateUrl: './engineer-rti-part-share-list.component.html',
    styleUrl: './engineer-rti-part-share-list.component.scss'
})
export class EngineerRtiPartShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idEngineerRti') idEngineerRti: string | null  = null;
     
    @Input('idPart') idPart: string | null  = null;
     
    @Input('idPartInstall') idPartInstall: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private engineerRtiPartReportService: EngineerRtiPartReportService,
        private engineerRtiPartService: EngineerRtiPartService,
        private tokenService: TokenService,

                        private engineerRtiService: EngineerRtiService,
                private partService: PartService,
                private partInstallService: PartInstallService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_engineerRtiPart = this.status == 'semua' ? null : this.status;

            
           
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
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllEngineerRti();
                    this.getAllPart();
                    this.getAllPartInstall();
                    }

    
    listEngineerRti: any[] = []; 
    
    listPart: any[] = []; 
    
    listPartInstall: any[] = []; 
    
    //untuak filter dari prent
    
    filterEngineerRti:any = {} 
    
    filterPart:any = {} 
    
    filterPartInstall:any = {} 
    

    // untuk fungsi get ALL relation
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
        
    currentUser: any = {};
    filter: any = {
    dateInstallRange: null,
  idEngineerRti: null,
  idPart: null,
  idPartInstall: null,
  tsiCycleMin: null,
  tsiCycleMax: null,
  tsiHoursMin: null,
  tsiHoursMax: null,
  tsiValMin: null,
  tsiValMax: null,
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
  tsoValMax: null,
  warantyStartCycleMin: null,
  warantyStartCycleMax: null,
  warantyStartDateRange: null,
  warantyStartDaysMin: null,
  warantyStartDaysMax: null,
  warantyStartHoursMin: null,
  warantyStartHoursMax: null
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
    search_field: string[] = ["parent","tsiVar","tsnVar","tsoVar","warantyStartDate"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateInstallRange: null,
  idEngineerRti: null,
  idPart: null,
  idPartInstall: null,
  tsiCycleMin: null,
  tsiCycleMax: null,
  tsiHoursMin: null,
  tsiHoursMax: null,
  tsiValMin: null,
  tsiValMax: null,
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
  tsoValMax: null,
  warantyStartCycleMin: null,
  warantyStartCycleMax: null,
  warantyStartDateRange: null,
  warantyStartDaysMin: null,
  warantyStartDaysMax: null,
  warantyStartHoursMin: null,
  warantyStartHoursMax: null
        };
        this.filter.status_engineerRtiPart = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_engineer_rti_part`] = { isNotNull: 'aktif' };

        this.engineerRtiPartReportService.engineerRtiPartReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "engineer_rti": this.filterEngineerRti, type: 'inner'
                    },
                                        {
                        "part": this.filterPart, type: 'inner'
                    },
                                        {
                        "part_install": this.filterPartInstall, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
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
         { key: 'dateInstall',  show: true },
              { key: 'parent',  show: true },
              { key: 'tsiCycle',  show: true },
              { key: 'tsiHours',  show: true },
              { key: 'tsiVal',  show: true },
              { key: 'tsiVar',  show: true },
              { key: 'tsnCycle',  show: true },
              { key: 'tsnHours',  show: true },
              { key: 'tsnVal',  show: true },
              { key: 'tsnVar',  show: true },
              { key: 'tsoCycle',  show: true },
              { key: 'tsoHours',  show: true },
              { key: 'tsoVal',  show: true },
              { key: 'tsoVar',  show: true },
              { key: 'warantyStartCycle',  show: true },
              { key: 'warantyStartDate',  show: true },
              { key: 'warantyStartDays',  show: true },
              { key: 'warantyStartHours',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('engineerRtiPart_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('engineerRtiPart_columns');
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
                console.warn('Gagal parse engineerRtiPart dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('engineer-rti-part', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<EngineerRtiPartShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: EngineerRtiPartShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsEngineerRtiPartDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<EngineerRtiPartShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: EngineerRtiPartShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idEngineerRtiPart:data.idEngineerRtiPart
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