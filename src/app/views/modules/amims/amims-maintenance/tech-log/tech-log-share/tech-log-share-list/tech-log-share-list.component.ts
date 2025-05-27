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
import { TechLogReportService, TechLogService, UsersService } from 'de-sdk-core';
import { AmimsTechLogDto } from 'de-sdk-core';
import { TechLogShareAddComponent } from '../tech-log-share-add/tech-log-share-add.component';
import { TechLogShareDetailComponent } from '../tech-log-share-detail/tech-log-share-detail.component';
import { AircraftService } from 'de-sdk-core';  



@Component({
    selector: 'app-tech-log-share-list',
    templateUrl: './tech-log-share-list.component.html',
    styleUrl: './tech-log-share-list.component.scss'
})
export class TechLogShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idAircraft') idAircraft: string | null = null;

    @Input('idUserAcc') idUserAcc: string | null = null;

    @Input('idUserInspection') idUserInspection: string | null = null;

    @Input('idUserLog') idUserLog: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private techLogReportService: TechLogReportService,
        private techLogService: TechLogService,
        private tokenService: TokenService,

        private aircraftService: AircraftService,
        private usersService: UsersService, 
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_techLog = this.status == 'semua' ? null : this.status;



        if (changes.idAircraft) {
            this.filterAircraft.idAircraft = this.idAircraft
        }


        if (changes.idUserAcc) {
            this.filterUserAcc.idUserAcc = this.idUserAcc
        }


        if (changes.idUserInspection) {
            this.filterUserInspection.idUserInspection = this.idUserInspection
        }


        if (changes.idUserLog) {
            this.filterUserLog.idUserLog = this.idUserLog
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllAircraft();
        this.getAllUserAcc();
        this.getAllUserInspection();
        this.getAllUserLog();
    }


    listAircraft: any[] = [];

    listUserAcc: any[] = [];

    listUserInspection: any[] = [];

    listUserLog: any[] = [];

    //untuak filter dari prent

    filterAircraft: any = {}

    filterUserAcc: any = {}

    filterUserInspection: any = {}

    filterUserLog: any = {}


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllUserAcc() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserAcc = data.data ?? []
        );
    }
    getAllUserInspection() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserInspection = data.data ?? []
        );
    }
    getAllUserLog() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserLog = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        authoRizedMin: null,
        authoRizedMax: null,
        cycleBfMin: null,
        cycleBfMax: null,
        cycleCfMin: null,
        cycleCfMax: null,
        cycleFlightMin: null,
        cycleFlightMax: null,
        dateInspectionRange: null,
        hoursBfMin: null,
        hoursBfMax: null,
        hoursCfMin: null,
        hoursCfMax: null,
        hoursFlightMin: null,
        hoursFlightMax: null,
        idAircraft: null,
        idUserAcc: null,
        idUserInspection: null,
        idUserLog: null,
        isDeleted: null,
        isEdit: null,
        lastUpdateMin: null,
        lastUpdateMax: null,
        numberNextMin: null,
        numberNextMax: null,
        placeMin: null,
        placeMax: null,
        techLogDateRange: null,
        totalCycleMin: null,
        totalCycleMax: null,
        totalFlightMin: null,
        totalFlightMax: null,
        totalFuelMin: null,
        totalFuelMax: null,
        validasiMin: null,
        validasiMax: null,
        xycleInputMin: null,
        xycleInputMax: null
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
    search_field: string[] = ["noteLog", "numberLog", "oldId", "pesan", "techLogDate"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            authoRizedMin: null,
            authoRizedMax: null,
            cycleBfMin: null,
            cycleBfMax: null,
            cycleCfMin: null,
            cycleCfMax: null,
            cycleFlightMin: null,
            cycleFlightMax: null,
            dateInspectionRange: null,
            hoursBfMin: null,
            hoursBfMax: null,
            hoursCfMin: null,
            hoursCfMax: null,
            hoursFlightMin: null,
            hoursFlightMax: null,
            idAircraft: null,
            idUserAcc: null,
            idUserInspection: null,
            idUserLog: null,
            isDeleted: null,
            isEdit: null,
            lastUpdateMin: null,
            lastUpdateMax: null,
            numberNextMin: null,
            numberNextMax: null,
            placeMin: null,
            placeMax: null,
            techLogDateRange: null,
            totalCycleMin: null,
            totalCycleMax: null,
            totalFlightMin: null,
            totalFlightMax: null,
            totalFuelMin: null,
            totalFuelMax: null,
            validasiMin: null,
            validasiMax: null,
            xycleInputMin: null,
            xycleInputMax: null
        };
        this.filter.status_techLog = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_tech_log`] = { isNotNull: 'aktif' };

        this.techLogReportService.techLogReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "aircraft": this.filterAircraft, type: 'inner'
                    },
                    {
                        "user_acc": this.filterUserAcc, type: 'inner'
                    },
                    {
                        "user_inspection": this.filterUserInspection, type: 'inner'
                    },
                    {
                        "user_log": this.filterUserLog, type: 'inner'
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
                        "name": "user_acc",
                        "type": "single"
                    },
                    {
                        "name": "user_inspection",
                        "type": "single"
                    },
                    {
                        "name": "user_log",
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
        { key: 'authoRized', show: true },
        { key: 'createdAt', show: true },
        { key: 'cycleBf', show: true },
        { key: 'cycleCf', show: true },
        { key: 'cycleFlight', show: true },
        { key: 'dateInspection', show: true },
        { key: 'hoursBf', show: true },
        { key: 'hoursCf', show: true },
        { key: 'hoursFlight', show: true },
        { key: 'isDeleted', show: true },
        { key: 'isEdit', show: true },
        { key: 'lastUpdate', show: true },
        { key: 'noteLog', show: true },
        { key: 'numberLog', show: true },
        { key: 'numberNext', show: true },
        { key: 'oldId', show: true },
        { key: 'pesan', show: true },
        { key: 'place', show: true },
        { key: 'techLogDate', show: true },
        { key: 'totalCycle', show: true },
        { key: 'totalFlight', show: true },
        { key: 'totalFuel', show: true },
        { key: 'updatedAt', show: true },
        { key: 'validasi', show: true },
        { key: 'xycleInput', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('techLog_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('techLog_columns');
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
                console.warn('Gagal parse techLog dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('tech-log', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<TechLogShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: TechLogShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsTechLogDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<TechLogShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: TechLogShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idTechLog: data.idTechLog
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