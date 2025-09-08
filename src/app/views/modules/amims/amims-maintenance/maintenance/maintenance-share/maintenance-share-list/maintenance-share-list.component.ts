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
import { MaintenanceReportService, MaintenanceService } from 'de-sdk-core';
import { AmimsMaintenanceDto } from 'de-sdk-core';
import { MaintenanceShareAddComponent } from '../maintenance-share-add/maintenance-share-add.component';
import { MaintenanceShareDetailComponent } from '../maintenance-share-detail/maintenance-share-detail.component';
import { MaintenanceCodeService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';



@Component({
    selector: 'app-maintenance-share-list',
    templateUrl: './maintenance-share-list.component.html',
    styleUrl: './maintenance-share-list.component.scss'
})
export class MaintenanceShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = false;
    //untuak filter dari prent

    @Input('idMaintenanceCode') idMaintenanceCode: string | null = null;

    @Input('idMpart') idMpart: string | null = null;



    constructor(
        private pesanService: PesanService,
        private cd: ChangeDetectorRef,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private maintenanceReportService: MaintenanceReportService,
        private maintenanceService: MaintenanceService,
        private tokenService: TokenService,

        private maintenanceCodeService: MaintenanceCodeService,
        private mpartService: MpartService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.on_location = this.status == 'semua' ? null : this.status;



        if (changes.idMaintenanceCode) {
            this.filterMaintenanceCode.idMaintenanceCode = this.idMaintenanceCode
        }


        if (changes.idMpart) {
            this.filterMpart.idMpart = this.idMpart
        }





        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllMaintenanceCode();
        // this.getAllMpart();
    }


    listMaintenanceCode: any[] = [];

    listMpart: any[] = [];

    listUser: any[] = [];

    //untuak filter dari prent

    filterMaintenanceCode: any = {}

    filterMpart: any = {}

    filterUser: any = {}


    // untuk fungsi get ALL relation
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
        cycleFromMin: null,
        cycleFromMax: null,
        cycleToMin: null,
        cycleToMax: null,
        flightHoursFromMin: null,
        flightHoursFromMax: null,
        flightHoursToMin: null,
        flightHoursToMax: null,
        idMaintenanceCode: null,
        idMpart: null,
        idUser: null,
        repetitionsMin: null,
        repetitionsMax: null,
        timeRangeFormMin: null,
        timeRangeFormMax: null,
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
    search_field: string[] = ["atachapter", "noteMaintenance", "oldId", "onLocation", "timeUnit", "typeMaintenance"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            cycleFromMin: null,
            cycleFromMax: null,
            cycleToMin: null,
            cycleToMax: null,
            flightHoursFromMin: null,
            flightHoursFromMax: null,
            flightHoursToMin: null,
            flightHoursToMax: null,
            idMaintenanceCode: null,
            idMpart: null,
            idUser: null,
            repetitionsMin: null,
            repetitionsMax: null,
            timeRangeFormMin: null,
            timeRangeFormMax: null,
            timeRangeToMin: null,
            timeRangeToMax: null
        };
        this.filter.on_location = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_maintenance`] = { isNotNull: 'aktif' };

        this.maintenanceReportService.maintenanceReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
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
                        "name": "maintenance_code",
                        "type": "single"
                    },
                    {
                        "name": "mpart",
                        "type": "single"
                    },
                    {
                        "name": "ata",
                        "to": "mpart",
                        "type": "single"
                    },
                    
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
        { key: 'atachapter', show: true },
        { key: 'createdAt', show: true },
        { key: 'cycleFrom', show: true },
        { key: 'cycleTo', show: true },
        { key: 'flightHoursFrom', show: true },
        { key: 'flightHoursTo', show: true },
        { key: 'noteMaintenance', show: true },
        { key: 'oldId', show: true },
        { key: 'onLocation', show: true },
        { key: 'repetitions', show: true },
        { key: 'timeRangeForm', show: true },
        { key: 'timeRangeTo', show: true },
        { key: 'timeUnit', show: true },
        { key: 'typeMaintenance', show: true },
        { key: 'updatedAt', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('maintenance_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('maintenance_columns');
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
                console.warn('Gagal parse maintenance dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('maintenance', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<MaintenanceShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: MaintenanceShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsMaintenanceDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<MaintenanceShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: MaintenanceShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idMaintenance: data.idMaintenance
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

    update(data: any) {
        if (!this.acl.can('contract-site', 'can_edit')) return;

        const drawerRef = this.drawerService.create<MaintenanceShareAddComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: MaintenanceShareAddComponent,
            nzWidth: (500) + 'px',
            nzContentParams: {
                maintenance: data
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