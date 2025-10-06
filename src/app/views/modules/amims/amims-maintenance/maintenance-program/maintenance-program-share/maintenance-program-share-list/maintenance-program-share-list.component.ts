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
import { MaintenanceProgramReportService, MaintenanceProgramService } from 'de-sdk-core';
import { AmimsMaintenanceProgramDto } from 'de-sdk-core';
import { MaintenanceProgramShareAddComponent } from '../maintenance-program-share-add/maintenance-program-share-add.component';
import { MaintenanceProgramShareDetailComponent } from '../maintenance-program-share-detail/maintenance-program-share-detail.component';
import { ActypeService } from 'de-sdk-core';
import { AircraftService } from 'de-sdk-core';
import { MaintenanceCodeService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core'; 



@Component({
    selector: 'app-maintenance-program-share-list',
    templateUrl: './maintenance-program-share-list.component.html',
    styleUrl: './maintenance-program-share-list.component.scss'
})
export class MaintenanceProgramShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idActype') idActype: string | null = null;

    @Input('idAircraft') idAircraft: string | null = null;

    @Input('idMaintenanceCode') idMaintenanceCode: string | null = null;

    @Input('idMpart') idMpart: string | null = null;

    @Input('idUser') idUser: string | null = null;


    constructor(
        private pesanService: PesanService,
        private cd: ChangeDetectorRef,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private maintenanceProgramReportService: MaintenanceProgramReportService,
        private maintenanceProgramService: MaintenanceProgramService,
        private tokenService: TokenService,

        private actypeService: ActypeService,
        private aircraftService: AircraftService,
        private maintenanceCodeService: MaintenanceCodeService,
        private mpartService: MpartService, 
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.is_active = this.status == 'semua' ? null : this.status;



        if (changes.idActype) {
            this.filterActype.idActype = this.idActype
        }


        if (changes.idAircraft) {
            this.filterAircraft.idAircraft = this.idAircraft
        }


        if (changes.idMaintenanceCode) {
            this.filterMaintenanceCode.idMaintenanceCode = this.idMaintenanceCode
        }


        if (changes.idMpart) {
            this.filterMpart.idMpart = this.idMpart
        }


        if (changes.idUser) {
            this.filterUser.idUser = this.idUser
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllActype();
        this.getAllAircraft();
        this.getAllMaintenanceCode();
        this.getAllMpart(); 
    }


    listActype: any[] = [];

    listAircraft: any[] = [];

    listMaintenanceCode: any[] = [];

    listMpart: any[] = [];

    listUser: any[] = [];

    //untuak filter dari prent

    filterActype: any = {}

    filterAircraft: any = {}

    filterMaintenanceCode: any = {}

    filterMpart: any = {}

    filterUser: any = {}


    // untuk fungsi get ALL relation
    getAllActype() {
        this.actypeService.actypeControllerFindAll().subscribe(
            data => this.listActype = data.data ?? []
        );
    }
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllMaintenanceCode() {
        this.maintenanceCodeService.maintenanceCodeControllerFindAll().subscribe(
            data => this.listMaintenanceCode = data.data ?? []
        );
    }
    getAllMpart() {
        this.mpartService.mpartControllerFindAll().subscribe(
            data => this.listMpart = data.data ?? []
        );
    }
    

    currentUser: any = {};
    filter: any = {
        cycleToMin: null,
        cycleToMax: null,
        hoursToMin: null,
        hoursToMax: null,
        idActype: null,
        idAircraft: null,
        idMaintenanceCode: null,
        idMpart: null,
        idUser: null,
        isActive: null,
        timeToMin: null,
        timeToMax: null
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
    search_field: string[] = ["note", "programCode", "programTitle", "referenceDoc", "timeToUnit"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            cycleToMin: null,
            cycleToMax: null,
            hoursToMin: null,
            hoursToMax: null,
            idActype: null,
            idAircraft: null,
            idMaintenanceCode: null,
            idMpart: null,
            idUser: null,
            isActive: null,
            timeToMin: null,
            timeToMax: null
        };
        this.filter.is_active = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_maintenance_program`] = { isNotNull: 'aktif' };

        this.maintenanceProgramReportService.maintenanceProgramReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "actype": this.filterActype, type: 'inner'
                    },
                     
                    {
                        "maintenance_code": this.filterMaintenanceCode, type: 'inner'
                    },
                    {
                        "mpart": this.filterMpart, type: 'inner'
                    } 
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "actype",
                        "type": "single"
                    },
                    {
                        "name": "aircraft",
                        "type": "single"
                    },
                    {
                        "name": "maintenance_code",
                        "type": "single"
                    },
                    {
                        "name": "mpart",
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
        { key: 'createdAt', show: false },
        { key: 'cycleTo', show: true },
        { key: 'hoursTo', show: true },
        { key: 'isActive', show: true },
        { key: 'note', show: false },
        { key: 'programCode', show: true },
        { key: 'programTitle', show: true },
        { key: 'referenceDoc', show: false },
        { key: 'timeTo', show: true },
        { key: 'timeToUnit', show: true },
        { key: 'updatedAt', show: false },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('maintenanceProgram_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('maintenanceProgram_columns');
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
                console.warn('Gagal parse maintenanceProgram dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('maintenance-program', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<MaintenanceProgramShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: MaintenanceProgramShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsMaintenanceProgramDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<MaintenanceProgramShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: MaintenanceProgramShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idMaintenanceProgram: data.idMaintenanceProgram
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

    update(data: any) {
        if (!this.acl.can('contract-site', 'can_edit')) return;

        const drawerRef = this.drawerService.create<MaintenanceProgramShareAddComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: MaintenanceProgramShareAddComponent,
            nzWidth: (500) + 'px',
            nzContentParams: {
                maintenanceProgram: data
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }
    delete(id: string) { }

    print() {
        let url = environment.srv_document + '/pdfAkutansi/vouchers?filter=' + JSON.stringify(this.filter) + '&token=' + this.tokenService.getToken();
        window.open(url, '_blank');
    }
}