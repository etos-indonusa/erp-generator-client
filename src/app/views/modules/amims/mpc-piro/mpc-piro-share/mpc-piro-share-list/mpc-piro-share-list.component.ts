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
import { MpcPiroReportService, MpcPiroService } from 'src/sdk/core/services';
import { AmimsMpcPiroDto } from 'src/sdk/core/models';
import { MpcPiroShareAddComponent } from '../mpc-piro-share-add/mpc-piro-share-add.component';
import { MpcPiroShareDetailComponent } from '../mpc-piro-share-detail/mpc-piro-share-detail.component';
import { AircraftService } from 'src/sdk/core/services';
import { SiteService } from 'src/sdk/core/services';
import { UsersService } from 'src/sdk/core/services';



@Component({
    selector: 'app-mpc-piro-share-list',
    templateUrl: './mpc-piro-share-list.component.html',
    styleUrl: './mpc-piro-share-list.component.scss'
})
export class MpcPiroShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idAircraft') idAircraft: string | null = null;

    @Input('idSite') idSite: string | null = null;

    @Input('idUser') idUser: string | null = null;

    @Input('idUserAcc') idUserAcc: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private mpcPiroReportService: MpcPiroReportService,
        private mpcPiroService: MpcPiroService,
        private tokenService: TokenService,

        private aircraftService: AircraftService,
        private siteService: SiteService,
        private usersService: UsersService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_mpcPiro = this.status == 'semua' ? null : this.status;



        if (changes.idAircraft) {
            this.filterAircraft.idAircraft = this.idAircraft
        }


        if (changes.idSite) {
            this.filterSite.idSite = this.idSite
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
        this.getAllSite();
        this.getAllUser();
        this.getAllUserAcc();
    }


    listAircraft: any[] = [];

    listSite: any[] = [];

    listUser: any[] = [];

    listUserAcc: any[] = [];

    //untuak filter dari prent

    filterAircraft: any = {}

    filterSite: any = {}

    filterUser: any = {}

    filterUserAcc: any = {}


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
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
    getAllUserAcc() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserAcc = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        dateAccRange: null,
        datePiroRange: null,
        idAircraft: null,
        idSite: null,
        idUser: null,
        idUserAcc: null,
        isDeleted: null,
        noIndexMin: null,
        noIndexMax: null,
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
    search_field: string[] = ["description", "keyword", "notePiro", "numberPiro", "typePiro"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateAccRange: null,
            datePiroRange: null,
            idAircraft: null,
            idSite: null,
            idUser: null,
            idUserAcc: null,
            isDeleted: null,
            noIndexMin: null,
            noIndexMax: null,
            validasiMin: null,
            validasiMax: null
        };
        this.filter.status_mpcPiro = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_mpc_piro`] = { isNotNull: 'aktif' };

        this.mpcPiroReportService.mpcPiroReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "aircraft": this.filterAircraft, type: 'inner'
                    },
                    {
                        "site": this.filterSite, type: 'inner'
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
                        "name": "site",
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
        { key: 'datePiro', show: true },
        { key: 'description', show: true },
        { key: 'isDeleted', show: true },
        { key: 'keyword', show: true },
        { key: 'noIndex', show: true },
        { key: 'notePiro', show: true },
        { key: 'numberPiro', show: true },
        { key: 'statusPiro', show: true },
        { key: 'typePiro', show: true },
        { key: 'updatedAt', show: true },
        { key: 'validasi', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('mpcPiro_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('mpcPiro_columns');
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
                console.warn('Gagal parse mpcPiro dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('mpc-piro', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<MpcPiroShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: MpcPiroShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsMpcPiroDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<MpcPiroShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: MpcPiroShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idMpcPiro: data.idMpcPiro
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