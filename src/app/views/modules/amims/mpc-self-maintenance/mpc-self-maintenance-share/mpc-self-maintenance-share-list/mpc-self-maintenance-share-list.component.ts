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
import { MpcSelfMaintenanceReportService, MpcSelfMaintenanceService, UsersService } from 'src/sdk/core/services';
import { AmimsMpcSelfMaintenanceDto } from 'src/sdk/core/models';
import { MpcSelfMaintenanceShareAddComponent } from '../mpc-self-maintenance-share-add/mpc-self-maintenance-share-add.component';
import { MpcSelfMaintenanceShareDetailComponent } from '../mpc-self-maintenance-share-detail/mpc-self-maintenance-share-detail.component';
import { EngineerRtiService } from 'src/sdk/core/services';
import { SiteService } from 'src/sdk/core/services';



@Component({
    selector: 'app-mpc-self-maintenance-share-list',
    templateUrl: './mpc-self-maintenance-share-list.component.html',
    styleUrl: './mpc-self-maintenance-share-list.component.scss'
})
export class MpcSelfMaintenanceShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idEngineerRti') idEngineerRti: string | null = null;

    @Input('idSite') idSite: string | null = null;

    @Input('idUserMaintenance') idUserMaintenance: string | null = null;

    @Input('idUserQa') idUserQa: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private mpcSelfMaintenanceReportService: MpcSelfMaintenanceReportService,
        private mpcSelfMaintenanceService: MpcSelfMaintenanceService,
        private tokenService: TokenService,

        private engineerRtiService: EngineerRtiService,
        private siteService: SiteService,
        private usersService: UsersService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_mpcSelfMaintenance = this.status == 'semua' ? null : this.status;



        if (changes.idEngineerRti) {
            this.filterEngineerRti.idEngineerRti = this.idEngineerRti
        }


        if (changes.idSite) {
            this.filterSite.idSite = this.idSite
        }


        if (changes.idUserMaintenance) {
            this.filterUserMaintenance.idUserMaintenance = this.idUserMaintenance
        }


        if (changes.idUserQa) {
            this.filterUserQa.idUserQa = this.idUserQa
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllEngineerRti();
        this.getAllSite();
        this.getAllUserMaintenance();
        this.getAllUserQa();
    }


    listEngineerRti: any[] = [];

    listSite: any[] = [];

    listUserMaintenance: any[] = [];

    listUserQa: any[] = [];

    //untuak filter dari prent

    filterEngineerRti: any = {}

    filterSite: any = {}

    filterUserMaintenance: any = {}

    filterUserQa: any = {}


    // untuk fungsi get ALL relation
    getAllEngineerRti() {
        this.engineerRtiService.engineerRtiControllerFindAll().subscribe(
            data => this.listEngineerRti = data.data ?? []
        );
    }
    getAllSite() {
        this.siteService.siteControllerFindAll().subscribe(
            data => this.listSite = data.data ?? []
        );
    }
    getAllUserMaintenance() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserMaintenance = data.data ?? []
        );
    }
    getAllUserQa() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserQa = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        dateAccQaRange: null,
        dateMaintenanceRange: null,
        idEngineerRti: null,
        idSite: null,
        idUserMaintenance: null,
        idUserQa: null
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
    search_field: string[] = ["doc", "numberMaintenance", "reportMaintenance", "typeMaintenance"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateAccQaRange: null,
            dateMaintenanceRange: null,
            idEngineerRti: null,
            idSite: null,
            idUserMaintenance: null,
            idUserQa: null
        };
        this.filter.status_mpcSelfMaintenance = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_mpc_self_maintenance`] = { isNotNull: 'aktif' };

        this.mpcSelfMaintenanceReportService.mpcSelfMaintenanceReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "engineer_rti": this.filterEngineerRti, type: 'inner'
                    },
                    {
                        "site": this.filterSite, type: 'inner'
                    },
                    {
                        "user_maintenance": this.filterUserMaintenance, type: 'inner'
                    },
                    {
                        "user_qa": this.filterUserQa, type: 'inner'
                    }
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "engineer_rti",
                        "type": "single"
                    },
                    {
                        "name": "site",
                        "type": "single"
                    },
                    {
                        "name": "user_maintenance",
                        "type": "single"
                    },
                    {
                        "name": "user_qa",
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
        { key: 'dateAccQa', show: true },
        { key: 'dateMaintenance', show: true },
        { key: 'doc', show: true },
        { key: 'numberMaintenance', show: true },
        { key: 'reportMaintenance', show: true },
        { key: 'statusMaintenance', show: true },
        { key: 'typeMaintenance', show: true },
        { key: 'updatedAt', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('mpcSelfMaintenance_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('mpcSelfMaintenance_columns');
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
                console.warn('Gagal parse mpcSelfMaintenance dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('mpc-self-maintenance', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<MpcSelfMaintenanceShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: MpcSelfMaintenanceShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsMpcSelfMaintenanceDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<MpcSelfMaintenanceShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: MpcSelfMaintenanceShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idMpcSelfMaintenance: data.idMpcSelfMaintenance
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