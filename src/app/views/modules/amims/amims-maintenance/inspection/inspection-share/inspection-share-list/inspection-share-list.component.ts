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
import { InspectionReportService, InspectionService } from 'de-sdk-core';
import { AmimsInspectionDto } from 'de-sdk-core';
import { InspectionShareAddComponent } from '../inspection-share-add/inspection-share-add.component';
import { InspectionShareDetailComponent } from '../inspection-share-detail/inspection-share-detail.component';
import { AircraftService } from 'de-sdk-core';
import { MaintenanceCodeService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { UsersService } from 'de-sdk-core';



@Component({
    selector: 'app-inspection-share-list',
    templateUrl: './inspection-share-list.component.html',
    styleUrl: './inspection-share-list.component.scss'
})
export class InspectionShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idAircraft') idAircraft: string | null = null;

    @Input('idMaintenanceCode') idMaintenanceCode: string | null = null;

    @Input('idPart') idPart: string | null = null;

    @Input('idUser') idUser: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private inspectionReportService: InspectionReportService,
        private inspectionService: InspectionService,
        private tokenService: TokenService,

        private aircraftService: AircraftService,
        private maintenanceCodeService: MaintenanceCodeService,
        private partService: PartService,
        private usersService: UsersService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_inspection = this.status == 'semua' ? null : this.status;



        if (changes.idAircraft) {
            this.filterAircraft.idAircraft = this.idAircraft
        }


        if (changes.idMaintenanceCode) {
            this.filterMaintenanceCode.idMaintenanceCode = this.idMaintenanceCode
        }


        if (changes.idPart) {
            this.filterPart.idPart = this.idPart
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

        this.getAllAircraft();
        this.getAllMaintenanceCode();
        this.getAllPart();
        this.getAllUser();
    }


    listAircraft: any[] = [];

    listMaintenanceCode: any[] = [];

    listPart: any[] = [];

    listUser: any[] = [];

    //untuak filter dari prent

    filterAircraft: any = {}

    filterMaintenanceCode: any = {}

    filterPart: any = {}

    filterUser: any = {}


    // untuk fungsi get ALL relation
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
        cycleToMin: null,
        cycleToMax: null,
        flightHoursToMin: null,
        flightHoursToMax: null,
        idAircraft: null,
        idMaintenanceCode: null,
        idPart: null,
        idUser: null,
        repetitionsMin: null,
        repetitionsMax: null,
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
    sortValue: string | null = 'desc';
    sortKey: string | null = 'created_at';
    search: string | null = null;
    search_field: string[] = ["atachapter", "noteInspection", "oldId", "timeUnit"];

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
            flightHoursToMin: null,
            flightHoursToMax: null,
            idAircraft: null,
            idMaintenanceCode: null,
            idPart: null,
            idUser: null,
            repetitionsMin: null,
            repetitionsMax: null,
            timeRangeToMin: null,
            timeRangeToMax: null
        };
        this.filter.status_inspection = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_inspection`] = { isNotNull: 'aktif' };

        this.inspectionReportService.inspectionReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "aircraft": this.filterAircraft, type: 'inner'
                    },
                    {
                        "maintenance_code": this.filterMaintenanceCode, type: 'inner'
                    },
                    {
                        "part": this.filterPart, type: 'inner'
                    }
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "aircraft",
                        "type": "single"
                    },
                    {
                        "name": "maintenance_code",
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
        this.sortValue = (this.currentSort && this.currentSort.value) || 'desc';
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
        { key: 'cycleTo', show: true },
        { key: 'flightHoursTo', show: true },
        { key: 'noteInspection', show: true },
        { key: 'oldId', show: true },
        { key: 'repetitions', show: true },
        { key: 'timeRangeTo', show: true },
        { key: 'timeUnit', show: true },
        { key: 'updatedAt', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('inspection_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('inspection_columns');
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
                console.warn('Gagal parse inspection dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('inspection', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<InspectionShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: InspectionShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsInspectionDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<InspectionShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: InspectionShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idInspection: data.idInspection
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

    update(data: any) { }
    delete(id: string) { }

    print() {
        let url = environment.srv_document + '/pdfAkutansi/vouchers?filter=' + JSON.stringify(this.filter) + '&token=' + this.tokenService.getToken();
        window.open(url, '_blank');
    }
}