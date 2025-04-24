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
import { MpcWpReportService, MpcWpService, UsersService } from 'de-sdk-core';
import { AmimsMpcWpDto } from 'de-sdk-core';
import { MpcWpShareAddComponent } from '../mpc-wp-share-add/mpc-wp-share-add.component';
import { MpcWpShareDetailComponent } from '../mpc-wp-share-detail/mpc-wp-share-detail.component';
import { AircraftService } from 'de-sdk-core';



@Component({
    selector: 'app-mpc-wp-share-list',
    templateUrl: './mpc-wp-share-list.component.html',
    styleUrl: './mpc-wp-share-list.component.scss'
})
export class MpcWpShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idAircraft') idAircraft: string | null = null;

    @Input('idUserMm') idUserMm: string | null = null;

    @Input('idUserMpc') idUserMpc: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private mpcWpReportService: MpcWpReportService,
        private mpcWpService: MpcWpService,
        private tokenService: TokenService,

        private aircraftService: AircraftService,
        private usersService: UsersService, 
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_mpcWp = this.status == 'semua' ? null : this.status;



        if (changes.idAircraft) {
            this.filterAircraft.idAircraft = this.idAircraft
        }


        if (changes.idUserMm) {
            this.filterUserMm.idUserMm = this.idUserMm
        }


        if (changes.idUserMpc) {
            this.filterUserMpc.idUserMpc = this.idUserMpc
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllAircraft();
        this.getAllUserMm();
        this.getAllUserMpc();
    }


    listAircraft: any[] = [];

    listUserMm: any[] = [];

    listUserMpc: any[] = [];

    //untuak filter dari prent

    filterAircraft: any = {}

    filterUserMm: any = {}

    filterUserMpc: any = {}


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllUserMm() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserMm = data.data ?? []
        );
    }
    getAllUserMpc() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserMpc = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        dateAccRange: null,
        endDateWpRange: null,
        endHoursMin: null,
        endHoursMax: null,
        idAircraft: null,
        idUserMm: null,
        idUserMpc: null,
        onSiteMin: null,
        onSiteMax: null,
        periodYearMin: null,
        periodYearMax: null,
        startDateWpRange: null,
        startHoursMin: null,
        startHoursMax: null,
        validatedMin: null,
        validatedMax: null
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
    search_field: string[] = ["endDateWp", "engineEnd", "engineStart", "noteWp", "numberWp", "period", "place", "reason", "startDateWp", "typeWork"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateAccRange: null,
            endDateWpRange: null,
            endHoursMin: null,
            endHoursMax: null,
            idAircraft: null,
            idUserMm: null,
            idUserMpc: null,
            onSiteMin: null,
            onSiteMax: null,
            periodYearMin: null,
            periodYearMax: null,
            startDateWpRange: null,
            startHoursMin: null,
            startHoursMax: null,
            validatedMin: null,
            validatedMax: null
        };
        this.filter.status_mpcWp = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_mpc_wp`] = { isNotNull: 'aktif' };

        this.mpcWpReportService.mpcWpReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "aircraft": this.filterAircraft, type: 'inner'
                    },
                    {
                        "user_mm": this.filterUserMm, type: 'inner'
                    },
                    {
                        "user_mpc": this.filterUserMpc, type: 'inner'
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
                        "name": "user_mm",
                        "type": "single"
                    },
                    {
                        "name": "user_mpc",
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
        { key: 'createdAt', show: true },
        { key: 'dateAcc', show: true },
        { key: 'endDateWp', show: true },
        { key: 'endHours', show: true },
        { key: 'engineEnd', show: true },
        { key: 'engineStart', show: true },
        { key: 'noteWp', show: true },
        { key: 'numberWp', show: true },
        { key: 'onSite', show: true },
        { key: 'period', show: true },
        { key: 'periodYear', show: true },
        { key: 'place', show: true },
        { key: 'reason', show: true },
        { key: 'startDateWp', show: true },
        { key: 'startHours', show: true },
        { key: 'statusWp', show: true },
        { key: 'typeWork', show: true },
        { key: 'updatedAt', show: true },
        { key: 'validated', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('mpcWp_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('mpcWp_columns');
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
                console.warn('Gagal parse mpcWp dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('mpc-wp', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<MpcWpShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: MpcWpShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsMpcWpDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<MpcWpShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: MpcWpShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idMpcWp: data.idMpcWp
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