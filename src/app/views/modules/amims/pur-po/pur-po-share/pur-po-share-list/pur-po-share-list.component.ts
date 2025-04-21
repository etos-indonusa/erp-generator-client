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
import { PurPoReportService, PurPoService } from 'src/sdk/core/services';
import { AmimsPurPoDto } from 'src/sdk/core/models';
import { PurPoShareAddComponent } from '../pur-po-share-add/pur-po-share-add.component';
import { PurPoShareDetailComponent } from '../pur-po-share-detail/pur-po-share-detail.component';
import { CurrencyService } from 'src/sdk/core/services';
import { PositionService } from 'src/sdk/core/services';
import { PurVendorService } from 'src/sdk/core/services';
import { PurVendorContactService } from 'src/sdk/core/services';
import { SiteService } from 'src/sdk/core/services';
import { UsersService } from 'src/sdk/core/services';



@Component({
    selector: 'app-pur-po-share-list',
    templateUrl: './pur-po-share-list.component.html',
    styleUrl: './pur-po-share-list.component.scss'
})
export class PurPoShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idCurrency') idCurrency: string | null = null;

    @Input('idPosition') idPosition: string | null = null;

    @Input('idPurVendor') idPurVendor: string | null = null;

    @Input('idPurVendorContact') idPurVendorContact: string | null = null;

    @Input('idSite') idSite: string | null = null;

    @Input('idUser') idUser: string | null = null;

    @Input('idUserDirector') idUserDirector: string | null = null;

    @Input('idUserManager') idUserManager: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private purPoReportService: PurPoReportService,
        private purPoService: PurPoService,
        private tokenService: TokenService,

        private currencyService: CurrencyService,
        private positionService: PositionService,
        private purVendorService: PurVendorService,
        private purVendorContactService: PurVendorContactService,
        private siteService: SiteService,
        private usersService: UsersService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_purPo = this.status == 'semua' ? null : this.status;



        if (changes.idCurrency) {
            this.filterCurrency.idCurrency = this.idCurrency
        }


        if (changes.idPosition) {
            this.filterPosition.idPosition = this.idPosition
        }


        if (changes.idPurVendor) {
            this.filterPurVendor.idPurVendor = this.idPurVendor
        }


        if (changes.idPurVendorContact) {
            this.filterPurVendorContact.idPurVendorContact = this.idPurVendorContact
        }


        if (changes.idSite) {
            this.filterSite.idSite = this.idSite
        }


        if (changes.idUser) {
            this.filterUser.idUser = this.idUser
        }


        if (changes.idUserDirector) {
            this.filterUserDirector.idUserDirector = this.idUserDirector
        }


        if (changes.idUserManager) {
            this.filterUserManager.idUserManager = this.idUserManager
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllCurrency();
        this.getAllPosition();
        this.getAllPurVendor();
        this.getAllPurVendorContact();
        this.getAllSite();
        this.getAllUser();
        this.getAllUserDirector();
        this.getAllUserManager();
    }


    listCurrency: any[] = [];

    listPosition: any[] = [];

    listPurVendor: any[] = [];

    listPurVendorContact: any[] = [];

    listSite: any[] = [];

    listUser: any[] = [];

    listUserDirector: any[] = [];

    listUserManager: any[] = [];

    //untuak filter dari prent

    filterCurrency: any = {}

    filterPosition: any = {}

    filterPurVendor: any = {}

    filterPurVendorContact: any = {}

    filterSite: any = {}

    filterUser: any = {}

    filterUserDirector: any = {}

    filterUserManager: any = {}


    // untuk fungsi get ALL relation
    getAllCurrency() {
        this.currencyService.currencyControllerFindAll().subscribe(
            data => this.listCurrency = data.data ?? []
        );
    }
    getAllPosition() {
        this.positionService.positionControllerFindAll().subscribe(
            data => this.listPosition = data.data ?? []
        );
    }
    getAllPurVendor() {
        this.purVendorService.purVendorControllerFindAll().subscribe(
            data => this.listPurVendor = data.data ?? []
        );
    }
    getAllPurVendorContact() {
        this.purVendorContactService.purVendorContactControllerFindAll().subscribe(
            data => this.listPurVendorContact = data.data ?? []
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
    getAllUserDirector() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserDirector = data.data ?? []
        );
    }
    getAllUserManager() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserManager = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        approveDirectorMin: null,
        approveDirectorMax: null,
        dateAccRange: null,
        dateAccDirectorRange: null,
        dateDeadlineRange: null,
        datePoRange: null,
        idCurrency: null,
        idPosition: null,
        idPurVendor: null,
        idPurVendorContact: null,
        idSite: null,
        idUser: null,
        idUserDirector: null,
        idUserManager: null,
        isDeleted: null,
        noIndexMin: null,
        noIndexMax: null,
        priceTotalMin: null,
        priceTotalMax: null,
        quotationDateRange: null,
        validasiMin: null,
        validasiMax: null,
        vatMin: null,
        vatMax: null
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
    search_field: string[] = ["modeOfTransport", "notePo", "numberPo", "oldPo", "quotationDate", "quotationNumber", "shipping", "term", "typePo"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            approveDirectorMin: null,
            approveDirectorMax: null,
            dateAccRange: null,
            dateAccDirectorRange: null,
            dateDeadlineRange: null,
            datePoRange: null,
            idCurrency: null,
            idPosition: null,
            idPurVendor: null,
            idPurVendorContact: null,
            idSite: null,
            idUser: null,
            idUserDirector: null,
            idUserManager: null,
            isDeleted: null,
            noIndexMin: null,
            noIndexMax: null,
            priceTotalMin: null,
            priceTotalMax: null,
            quotationDateRange: null,
            validasiMin: null,
            validasiMax: null,
            vatMin: null,
            vatMax: null
        };
        this.filter.status_purPo = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_pur_po`] = { isNotNull: 'aktif' };

        this.purPoReportService.purPoReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "currency": this.filterCurrency, type: 'inner'
                    },
                    {
                        "position": this.filterPosition, type: 'inner'
                    },
                    {
                        "pur_vendor": this.filterPurVendor, type: 'inner'
                    },
                    {
                        "pur_vendor_contact": this.filterPurVendorContact, type: 'inner'
                    },
                    {
                        "site": this.filterSite, type: 'inner'
                    },
                    {
                        "user": this.filterUser, type: 'inner'
                    },
                    {
                        "user_director": this.filterUserDirector, type: 'inner'
                    },
                    {
                        "user_manager": this.filterUserManager, type: 'inner'
                    }
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "currency",
                        "type": "single"
                    },
                    {
                        "name": "position",
                        "type": "single"
                    },
                    {
                        "name": "pur_vendor",
                        "type": "single"
                    },
                    {
                        "name": "pur_vendor_contact",
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
                        "name": "user_director",
                        "type": "single"
                    },
                    {
                        "name": "user_manager",
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
        { key: 'approveDirector', show: true },
        { key: 'createdAt', show: true },
        { key: 'dateAcc', show: true },
        { key: 'dateAccDirector', show: true },
        { key: 'dateDeadline', show: true },
        { key: 'datePo', show: true },
        { key: 'isDeleted', show: true },
        { key: 'modeOfTransport', show: true },
        { key: 'noIndex', show: true },
        { key: 'notePo', show: true },
        { key: 'numberPo', show: true },
        { key: 'oldPo', show: true },
        { key: 'priceTotal', show: true },
        { key: 'quotationDate', show: true },
        { key: 'quotationNumber', show: true },
        { key: 'shipping', show: true },
        { key: 'statusPo', show: true },
        { key: 'term', show: true },
        { key: 'typePo', show: true },
        { key: 'updatedAt', show: true },
        { key: 'validasi', show: true },
        { key: 'vat', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('purPo_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('purPo_columns');
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
                console.warn('Gagal parse purPo dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('pur-po', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<PurPoShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: PurPoShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsPurPoDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<PurPoShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: PurPoShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idPurPo: data.idPurPo
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