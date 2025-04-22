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
import { EngineerPmtrReportService, EngineerPmtrService } from 'de-sdk-core/services';
import { AmimsEngineerPmtrDto } from 'de-sdk-core/models';
import { EngineerPmtrShareAddComponent } from '../engineer-pmtr-share-add/engineer-pmtr-share-add.component';
import { EngineerPmtrShareDetailComponent } from '../engineer-pmtr-share-detail/engineer-pmtr-share-detail.component';
import { AircraftService } from 'de-sdk-core/services';
import { UsersService } from 'de-sdk-core/services';



@Component({
    selector: 'app-engineer-pmtr-share-list',
    templateUrl: './engineer-pmtr-share-list.component.html',
    styleUrl: './engineer-pmtr-share-list.component.scss'
})
export class EngineerPmtrShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idAircraft') idAircraft: string | null = null;

    @Input('idUser') idUser: string | null = null;

    @Input('idUserAcc') idUserAcc: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private engineerPmtrReportService: EngineerPmtrReportService,
        private engineerPmtrService: EngineerPmtrService,
        private tokenService: TokenService,

        private aircraftService: AircraftService,
        private usersService: UsersService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_engineerPmtr = this.status == 'semua' ? null : this.status;



        if (changes.idAircraft) {
            this.filterAircraft.idAircraft = this.idAircraft
        }


        if (changes.idUser) {
            this.filterUser.idUser = this.idUser
        }


        if (changes.idUserAcc) {
            this.filterUserAcc.idUserAcc = this.idUserAcc
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllAircraft();
        this.getAllUser();
        this.getAllUserAcc();
    }


    listAircraft: any[] = [];

    listUser: any[] = [];

    listUserAcc: any[] = [];

    //untuak filter dari prent

    filterAircraft: any = {}

    filterUser: any = {}

    filterUserAcc: any = {}


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllUser() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUser = data.data ?? []
        );
    }
    getAllUserAcc() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserAcc = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        dateAccRange: null,
        datePmtrRange: null,
        fromSiteMin: null,
        fromSiteMax: null,
        idAircraft: null,
        idUser: null,
        idUserAcc: null,
        isDeleted: null,
        noIndexMin: null,
        noIndexMax: null,
        toSiteMin: null,
        toSiteMax: null,
        validasiMin: null,
        validasiMax: null
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
    search_field: string[] = ["notePmtr", "numberPmtr"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateAccRange: null,
            datePmtrRange: null,
            fromSiteMin: null,
            fromSiteMax: null,
            idAircraft: null,
            idUser: null,
            idUserAcc: null,
            isDeleted: null,
            noIndexMin: null,
            noIndexMax: null,
            toSiteMin: null,
            toSiteMax: null,
            validasiMin: null,
            validasiMax: null
        };
        this.filter.status_engineerPmtr = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_engineer_pmtr`] = { isNotNull: 'aktif' };

        this.engineerPmtrReportService.engineerPmtrReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "aircraft": this.filterAircraft, type: 'inner'
                    },
                    {
                        "user": this.filterUser, type: 'inner'
                    },
                    {
                        "user_acc": this.filterUserAcc, type: 'inner'
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
                        "name": "user",
                        "type": "single"
                    },
                    {
                        "name": "user_acc",
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
        { key: 'datePmtr', show: true },
        { key: 'fromSite', show: true },
        { key: 'isDeleted', show: true },
        { key: 'noIndex', show: true },
        { key: 'notePmtr', show: true },
        { key: 'numberPmtr', show: true },
        { key: 'statusPmtr', show: true },
        { key: 'toSite', show: true },
        { key: 'updatedAt', show: true },
        { key: 'validasi', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('engineerPmtr_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('engineerPmtr_columns');
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
                console.warn('Gagal parse engineerPmtr dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('engineer-pmtr', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<EngineerPmtrShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: EngineerPmtrShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsEngineerPmtrDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<EngineerPmtrShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: EngineerPmtrShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idEngineerPmtr: data.idEngineerPmtr
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