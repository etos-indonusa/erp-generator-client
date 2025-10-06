import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { PesanService } from 'src/app/shared/services/pesan.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment.prod';
import { WorkCompletedReportService, WorkCompletedService } from 'de-sdk-core';
import { AmimsWorkCompletedDto } from 'de-sdk-core';
import { WorkCompletedShareAddComponent } from '../work-completed-share-add/work-completed-share-add.component';
import { WorkCompletedShareDetailComponent } from '../work-completed-share-detail/work-completed-share-detail.component';
import { AircraftService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
 


@Component({
    selector: 'app-work-completed-share-list',
    templateUrl: './work-completed-share-list.component.html',
    styleUrl: './work-completed-share-list.component.scss'
})
export class WorkCompletedShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idAircraft') idAircraft: string | null  = null;
     
    @Input('idPart') idPart: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private cd: ChangeDetectorRef,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private workCompletedReportService: WorkCompletedReportService,
        private workCompletedService: WorkCompletedService,
        private tokenService: TokenService,

                        private aircraftService: AircraftService,
                private partService: PartService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_workCompleted = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idAircraft)
            {
                this.filterAircraft.idAircraft = this.idAircraft
            }
            
           
            if (changes.idPart)
            {
                this.filterPart.idPart = this.idPart
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllAircraft();
                    this.getAllPart();
                    }

    
    listAircraft: any[] = []; 
    
    listPart: any[] = []; 
    
    //untuak filter dari prent
    
    filterAircraft:any = {} 
    
    filterPart:any = {} 
    

    // untuk fungsi get ALL relation
            getAllAircraft() {
    this.aircraftService.aircraftControllerFindAll().subscribe(
      data => this.listAircraft = data.data ?? []
    );
  }
        getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    actualWorkHoursMin: null,
  actualWorkHoursMax: null,
  completionDateRange: null,
  complianceDateRange: null,
  complianceHoursMin: null,
  complianceHoursMax: null,
  complianceLandingsMin: null,
  complianceLandingsMax: null,
  idAircraft: null,
  idPart: null,
  intervalDaysMin: null,
  intervalDaysMax: null,
  intervalHoursMin: null,
  intervalHoursMax: null,
  intervalLandingsMin: null,
  intervalLandingsMax: null,
  intervalMonthsMin: null,
  intervalMonthsMax: null,
  nextDueDateRange: null,
  nextDueHoursMin: null,
  nextDueHoursMax: null,
  nextDueLandingsMin: null,
  nextDueLandingsMax: null
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
    search_field: string[] = ["accountCode","adSbNumber","adminNotes","ataCode","authority","caseNumber","completionDate","complianceDate","disposition","engineerSign","inspectorSign","itemType","location","nextDueDate","reference","regularNotes","releaseStatement","remarks","requirementType","workCompletedNumber","workSummary"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            actualWorkHoursMin: null,
  actualWorkHoursMax: null,
  completionDateRange: null,
  complianceDateRange: null,
  complianceHoursMin: null,
  complianceHoursMax: null,
  complianceLandingsMin: null,
  complianceLandingsMax: null,
  idAircraft: null,
  idPart: null,
  intervalDaysMin: null,
  intervalDaysMax: null,
  intervalHoursMin: null,
  intervalHoursMax: null,
  intervalLandingsMin: null,
  intervalLandingsMax: null,
  intervalMonthsMin: null,
  intervalMonthsMax: null,
  nextDueDateRange: null,
  nextDueHoursMin: null,
  nextDueHoursMax: null,
  nextDueLandingsMin: null,
  nextDueLandingsMax: null
        };
        this.filter.status_workCompleted = this.status == 'semua' ? null : this.status;
    }

    resetData() {
        this.resetParam();
        this.searchData();
    }

    get validSortValue(): 'asc' | 'desc' | undefined {
        if (this.sortValue === 'asc') return 'asc';
        if (this.sortValue === 'desc') return 'desc';
        return undefined;
    }

    searchData(reset: boolean = false): void {
        if (reset) this.pageIndex = 1;
        this.loading = true;

        const finalFilter: any = this.buildFilterForBackend(this.filter);
        finalFilter[`id_work_completed`] = { isNotNull: 'aktif' };

        this.workCompletedReportService.workCompletedReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "aircraft": this.filterAircraft, type: 'inner'
                    },
                                        {
                        "part": this.filterPart, type: 'inner'
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
    "name": "part",
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
            this.cd.detectChanges()
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
         { key: 'accountCode',  show: true },
              { key: 'actualWorkHours',  show: true },
              { key: 'adSbNumber',  show: true },
              { key: 'adminNotes',  show: true },
              { key: 'ataCode',  show: true },
              { key: 'authority',  show: true },
              { key: 'caseNumber',  show: true },
              { key: 'completionDate',  show: true },
              { key: 'complianceDate',  show: true },
              { key: 'complianceHours',  show: true },
              { key: 'complianceLandings',  show: true },
              { key: 'createdAt',  show: true },
              { key: 'disposition',  show: true },
              { key: 'engineerSign',  show: true },
              { key: 'inspectorSign',  show: true },
              { key: 'intervalDays',  show: true },
              { key: 'intervalHours',  show: true },
              { key: 'intervalLandings',  show: true },
              { key: 'intervalMonths',  show: true },
              { key: 'itemType',  show: true },
              { key: 'location',  show: true },
              { key: 'nextDueDate',  show: true },
              { key: 'nextDueHours',  show: true },
              { key: 'nextDueLandings',  show: true },
              { key: 'reference',  show: true },
              { key: 'regularNotes',  show: true },
              { key: 'releaseStatement',  show: true },
              { key: 'remarks',  show: true },
              { key: 'requirementType',  show: true },
              { key: 'updatedAt',  show: true },
              { key: 'workCompletedNumber',  show: true },
              { key: 'workSummary',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('workCompleted_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('workCompleted_columns');
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
                console.warn('Gagal parse workCompleted dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('work-completed', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<WorkCompletedShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: WorkCompletedShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsWorkCompletedDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<WorkCompletedShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: WorkCompletedShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idWorkCompleted:data.idWorkCompleted
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

    update(data: any) {
        if (!this.acl.can('contract-site', 'can_edit')) return;

        const drawerRef = this.drawerService.create<WorkCompletedShareAddComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: WorkCompletedShareAddComponent,
            nzWidth: (500) + 'px',
            nzContentParams:{
                workCompleted:data
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }
    delete(id: string) {} 

    print() {
        let url = environment.srv_document + '/pdfAkutansi/vouchers?filter=' + JSON.stringify(this.filter) + '&token=' + this.tokenService.getToken();
        window.open(url, '_blank');
    }
}