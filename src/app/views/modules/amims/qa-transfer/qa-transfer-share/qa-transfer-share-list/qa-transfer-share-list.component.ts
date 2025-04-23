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
import { QaTransferReportService, QaTransferService } from 'de-sdk-core';
import { AmimsQaTransferDto } from 'de-sdk-core';
import { QaTransferShareAddComponent } from '../qa-transfer-share-add/qa-transfer-share-add.component';
import { QaTransferShareDetailComponent } from '../qa-transfer-share-detail/qa-transfer-share-detail.component';
import { SiteService } from 'de-sdk-core';
import { UsersService } from 'de-sdk-core';



@Component({
    selector: 'app-qa-transfer-share-list',
    templateUrl: './qa-transfer-share-list.component.html',
    styleUrl: './qa-transfer-share-list.component.scss'
})
export class QaTransferShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idSite') idSite: string | null = null;

    @Input('idUser') idUser: string | null = null;

    @Input('idUserReceived') idUserReceived: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private qaTransferReportService: QaTransferReportService,
        private qaTransferService: QaTransferService,
        private tokenService: TokenService,

        private siteService: SiteService,
        private usersService: UsersService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_qaTransfer = this.status == 'semua' ? null : this.status;



        if (changes.idSite) {
            this.filterSite.idSite = this.idSite
        }


        if (changes.idUser) {
            this.filterUser.idUser = this.idUser
        }


        if (changes.idUserReceived) {
            this.filterUserReceived.idUserReceived = this.idUserReceived
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllSite();
        this.getAllUser();
        this.getAllUserReceived();
    }


    listSite: any[] = [];

    listUser: any[] = [];

    listUserReceived: any[] = [];

    //untuak filter dari prent

    filterSite: any = {}

    filterUser: any = {}

    filterUserReceived: any = {}


    // untuk fungsi get ALL relation
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
    getAllUserReceived() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserReceived = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        dateReceivedRange: null,
        dateTransferRange: null,
        idSite: null,
        idUser: null,
        idUserReceived: null,
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
    search_field: string[] = ["noteTransfer", "numberTransfer", "typeTransfer"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateReceivedRange: null,
            dateTransferRange: null,
            idSite: null,
            idUser: null,
            idUserReceived: null,
            noIndexMin: null,
            noIndexMax: null,
            toSiteMin: null,
            toSiteMax: null,
            validasiMin: null,
            validasiMax: null
        };
        this.filter.status_qaTransfer = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_qa_transfer`] = { isNotNull: 'aktif' };

        this.qaTransferReportService.qaTransferReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "site": this.filterSite, type: 'inner'
                    },
                    {
                        "user": this.filterUser, type: 'inner'
                    },
                    {
                        "user_received": this.filterUserReceived, type: 'inner'
                    }
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "site",
                        "type": "single"
                    },
                    {
                        "name": "user",
                        "type": "single"
                    },
                    {
                        "name": "user_received",
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
        { key: 'dateReceived', show: true },
        { key: 'dateTransfer', show: true },
        { key: 'noIndex', show: true },
        { key: 'noteTransfer', show: true },
        { key: 'numberTransfer', show: true },
        { key: 'statusTransfer', show: true },
        { key: 'toSite', show: true },
        { key: 'typeTransfer', show: true },
        { key: 'updatedAt', show: true },
        { key: 'validasi', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('qaTransfer_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('qaTransfer_columns');
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
                console.warn('Gagal parse qaTransfer dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('qa-transfer', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<QaTransferShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: QaTransferShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsQaTransferDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<QaTransferShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: QaTransferShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idQaTransfer: data.idQaTransfer
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