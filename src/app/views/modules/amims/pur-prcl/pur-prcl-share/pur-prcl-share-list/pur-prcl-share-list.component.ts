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
import { PurPrclReportService, PurPrclService, UsersService } from 'src/sdk/core/services';
import { AmimsPurPrclDto } from 'src/sdk/core/models';
import { PurPrclShareAddComponent } from '../pur-prcl-share-add/pur-prcl-share-add.component';
import { PurPrclShareDetailComponent } from '../pur-prcl-share-detail/pur-prcl-share-detail.component';
import { ConditionMonitoringService } from 'src/sdk/core/services';
import { CurrencyService } from 'src/sdk/core/services';
import { InternalGrnItemService } from 'src/sdk/core/services';
import { LifeTimeLimitService } from 'src/sdk/core/services';
import { MpartService } from 'src/sdk/core/services';
import { PartService } from 'src/sdk/core/services';
import { PartConditionService } from 'src/sdk/core/services';
import { PurGrnService } from 'src/sdk/core/services';
import { PurGrnItemService } from 'src/sdk/core/services';
import { PurVendorService } from 'src/sdk/core/services';



@Component({
    selector: 'app-pur-prcl-share-list',
    templateUrl: './pur-prcl-share-list.component.html',
    styleUrl: './pur-prcl-share-list.component.scss'
})
export class PurPrclShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idConditionMonitoring') idConditionMonitoring: string | null = null;

    @Input('idCurrency') idCurrency: string | null = null;

    @Input('idInternalGrnItem') idInternalGrnItem: string | null = null;

    @Input('idLifeTimeLimit') idLifeTimeLimit: string | null = null;

    @Input('idMpart') idMpart: string | null = null;

    @Input('idPart') idPart: string | null = null;

    @Input('idPartCondition') idPartCondition: string | null = null;

    @Input('idPurGrn') idPurGrn: string | null = null;

    @Input('idPurGrnItem') idPurGrnItem: string | null = null;

    @Input('idPurVendor') idPurVendor: string | null = null;

    @Input('idUserPu') idUserPu: string | null = null;

    @Input('idUserQa') idUserQa: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private purPrclReportService: PurPrclReportService,
        private purPrclService: PurPrclService,
        private tokenService: TokenService,

        private conditionMonitoringService: ConditionMonitoringService,
        private currencyService: CurrencyService,
        private internalGrnItemService: InternalGrnItemService,
        private lifeTimeLimitService: LifeTimeLimitService,
        private mpartService: MpartService,
        private partService: PartService,
        private partConditionService: PartConditionService,
        private purGrnService: PurGrnService,
        private purGrnItemService: PurGrnItemService,
        private purVendorService: PurVendorService,
        private usersService: UsersService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_purPrcl = this.status == 'semua' ? null : this.status;



        if (changes.idConditionMonitoring) {
            this.filterConditionMonitoring.idConditionMonitoring = this.idConditionMonitoring
        }


        if (changes.idCurrency) {
            this.filterCurrency.idCurrency = this.idCurrency
        }


        if (changes.idInternalGrnItem) {
            this.filterInternalGrnItem.idInternalGrnItem = this.idInternalGrnItem
        }


        if (changes.idLifeTimeLimit) {
            this.filterLifeTimeLimit.idLifeTimeLimit = this.idLifeTimeLimit
        }


        if (changes.idMpart) {
            this.filterMpart.idMpart = this.idMpart
        }


        if (changes.idPart) {
            this.filterPart.idPart = this.idPart
        }


        if (changes.idPartCondition) {
            this.filterPartCondition.idPartCondition = this.idPartCondition
        }


        if (changes.idPurGrn) {
            this.filterPurGrn.idPurGrn = this.idPurGrn
        }


        if (changes.idPurGrnItem) {
            this.filterPurGrnItem.idPurGrnItem = this.idPurGrnItem
        }


        if (changes.idPurVendor) {
            this.filterPurVendor.idPurVendor = this.idPurVendor
        }


        if (changes.idUserPu) {
            this.filterUserPu.idUserPu = this.idUserPu
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

        this.getAllConditionMonitoring();
        this.getAllCurrency();
        this.getAllInternalGrnItem();
        this.getAllLifeTimeLimit();
        this.getAllMpart();
        this.getAllPart();
        this.getAllPartCondition();
        this.getAllPurGrn();
        this.getAllPurGrnItem();
        this.getAllPurVendor();
        this.getAllUserPu();
        this.getAllUserQa();
    }


    listConditionMonitoring: any[] = [];

    listCurrency: any[] = [];

    listInternalGrnItem: any[] = [];

    listLifeTimeLimit: any[] = [];

    listMpart: any[] = [];

    listPart: any[] = [];

    listPartCondition: any[] = [];

    listPurGrn: any[] = [];

    listPurGrnItem: any[] = [];

    listPurVendor: any[] = [];

    listUserPu: any[] = [];

    listUserQa: any[] = [];

    //untuak filter dari prent

    filterConditionMonitoring: any = {}

    filterCurrency: any = {}

    filterInternalGrnItem: any = {}

    filterLifeTimeLimit: any = {}

    filterMpart: any = {}

    filterPart: any = {}

    filterPartCondition: any = {}

    filterPurGrn: any = {}

    filterPurGrnItem: any = {}

    filterPurVendor: any = {}

    filterUserPu: any = {}

    filterUserQa: any = {}


    // untuk fungsi get ALL relation
    getAllConditionMonitoring() {
        this.conditionMonitoringService.conditionMonitoringControllerFindAll().subscribe(
            data => this.listConditionMonitoring = data.data ?? []
        );
    }
    getAllCurrency() {
        this.currencyService.currencyControllerFindAll().subscribe(
            data => this.listCurrency = data.data ?? []
        );
    }
    getAllInternalGrnItem() {
        this.internalGrnItemService.internalGrnItemControllerFindAll().subscribe(
            data => this.listInternalGrnItem = data.data ?? []
        );
    }
    getAllLifeTimeLimit() {
        this.lifeTimeLimitService.lifeTimeLimitControllerFindAll().subscribe(
            data => this.listLifeTimeLimit = data.data ?? []
        );
    }
    getAllMpart() {
        this.mpartService.mpartControllerFindAll().subscribe(
            data => this.listMpart = data.data ?? []
        );
    }
    getAllPart() {
        this.partService.partControllerFindAll().subscribe(
            data => this.listPart = data.data ?? []
        );
    }
    getAllPartCondition() {
        this.partConditionService.partConditionControllerFindAll().subscribe(
            data => this.listPartCondition = data.data ?? []
        );
    }
    getAllPurGrn() {
        this.purGrnService.purGrnControllerFindAll().subscribe(
            data => this.listPurGrn = data.data ?? []
        );
    }
    getAllPurGrnItem() {
        this.purGrnItemService.purGrnItemControllerFindAll().subscribe(
            data => this.listPurGrnItem = data.data ?? []
        );
    }
    getAllPurVendor() {
        this.purVendorService.purVendorControllerFindAll().subscribe(
            data => this.listPurVendor = data.data ?? []
        );
    }
    getAllUserPu() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserPu = data.data ?? []
        );
    }
    getAllUserQa() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserQa = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        datePcrlRange: null,
        datePurRange: null,
        dateQaRange: null,
        idConditionMonitoring: null,
        idCurrency: null,
        idInternalGrnItem: null,
        idLifeTimeLimit: null,
        idMpart: null,
        idPart: null,
        idPartCondition: null,
        idPurGrn: null,
        idPurGrnItem: null,
        idPurVendor: null,
        idUserPu: null,
        idUserQa: null,
        isServiceable: null,
        lifeLimitCycleMin: null,
        lifeLimitCycleMax: null,
        lifeLimitHoursMin: null,
        lifeLimitHoursMax: null,
        lifeLimitValMin: null,
        lifeLimitValMax: null,
        loopIndexMin: null,
        loopIndexMax: null,
        manufactureDateRange: null,
        priceMin: null,
        priceMax: null,
        qtyCheckMin: null,
        qtyCheckMax: null,
        qtyPrclMin: null,
        qtyPrclMax: null,
        qtyReturnMin: null,
        qtyReturnMax: null,
        refDateRange: null,
        tboCycleMin: null,
        tboCycleMax: null,
        tboHoursMin: null,
        tboHoursMax: null,
        tboValMin: null,
        tboValMax: null,
        tsnCycleMin: null,
        tsnCycleMax: null,
        tsnHoursMin: null,
        tsnHoursMax: null,
        tsnValMin: null,
        tsnValMax: null,
        tsoCycleMin: null,
        tsoCycleMax: null,
        tsoHoursMin: null,
        tsoHoursMax: null,
        tsoValMin: null,
        tsoValMax: null,
        validasiMin: null,
        validasiMax: null,
        warrantyCycleMin: null,
        warrantyCycleMax: null,
        warrantyDaysMin: null,
        warrantyDaysMax: null,
        warrantyHoursMin: null,
        warrantyHoursMax: null,
        warrantyMonthsMin: null,
        warrantyMonthsMax: null,
        warrantyStartCycleMin: null,
        warrantyStartCycleMax: null,
        warrantyStartDateRange: null
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
    search_field: string[] = ["airworthiness", "certificationNo", "description", "draftBin", "lifeLimitVar", "manufacture", "manufactureDate", "notePcrl", "partCheckingPur", "partCheckingQa", "prclParent", "qualityCheck", "service", "sn", "tboVar", "tsnVar", "tsoVar", "typePrcl", "warrantyStartDate"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            datePcrlRange: null,
            datePurRange: null,
            dateQaRange: null,
            idConditionMonitoring: null,
            idCurrency: null,
            idInternalGrnItem: null,
            idLifeTimeLimit: null,
            idMpart: null,
            idPart: null,
            idPartCondition: null,
            idPurGrn: null,
            idPurGrnItem: null,
            idPurVendor: null,
            idUserPu: null,
            idUserQa: null,
            isServiceable: null,
            lifeLimitCycleMin: null,
            lifeLimitCycleMax: null,
            lifeLimitHoursMin: null,
            lifeLimitHoursMax: null,
            lifeLimitValMin: null,
            lifeLimitValMax: null,
            loopIndexMin: null,
            loopIndexMax: null,
            manufactureDateRange: null,
            priceMin: null,
            priceMax: null,
            qtyCheckMin: null,
            qtyCheckMax: null,
            qtyPrclMin: null,
            qtyPrclMax: null,
            qtyReturnMin: null,
            qtyReturnMax: null,
            refDateRange: null,
            tboCycleMin: null,
            tboCycleMax: null,
            tboHoursMin: null,
            tboHoursMax: null,
            tboValMin: null,
            tboValMax: null,
            tsnCycleMin: null,
            tsnCycleMax: null,
            tsnHoursMin: null,
            tsnHoursMax: null,
            tsnValMin: null,
            tsnValMax: null,
            tsoCycleMin: null,
            tsoCycleMax: null,
            tsoHoursMin: null,
            tsoHoursMax: null,
            tsoValMin: null,
            tsoValMax: null,
            validasiMin: null,
            validasiMax: null,
            warrantyCycleMin: null,
            warrantyCycleMax: null,
            warrantyDaysMin: null,
            warrantyDaysMax: null,
            warrantyHoursMin: null,
            warrantyHoursMax: null,
            warrantyMonthsMin: null,
            warrantyMonthsMax: null,
            warrantyStartCycleMin: null,
            warrantyStartCycleMax: null,
            warrantyStartDateRange: null
        };
        this.filter.status_purPrcl = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_pur_prcl`] = { isNotNull: 'aktif' };

        this.purPrclReportService.purPrclReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "condition_monitoring": this.filterConditionMonitoring, type: 'inner'
                    },
                    {
                        "currency": this.filterCurrency, type: 'inner'
                    },
                    {
                        "internal_grn_item": this.filterInternalGrnItem, type: 'inner'
                    },
                    {
                        "life_time_limit": this.filterLifeTimeLimit, type: 'inner'
                    },
                    {
                        "mpart": this.filterMpart, type: 'inner'
                    },
                    {
                        "part": this.filterPart, type: 'inner'
                    },
                    {
                        "part_condition": this.filterPartCondition, type: 'inner'
                    },
                    {
                        "pur_grn": this.filterPurGrn, type: 'inner'
                    },
                    {
                        "pur_grn_item": this.filterPurGrnItem, type: 'inner'
                    },
                    {
                        "pur_vendor": this.filterPurVendor, type: 'inner'
                    },
                    {
                        "user_pu": this.filterUserPu, type: 'inner'
                    },
                    {
                        "user_qa": this.filterUserQa, type: 'inner'
                    }
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "condition_monitoring",
                        "type": "single"
                    },
                    {
                        "name": "currency",
                        "type": "single"
                    },
                    {
                        "name": "internal_grn_item",
                        "type": "single"
                    },
                    {
                        "name": "life_time_limit",
                        "type": "single"
                    },
                    {
                        "name": "mpart",
                        "type": "single"
                    },
                    {
                        "name": "part",
                        "type": "single"
                    },
                    {
                        "name": "part_condition",
                        "type": "single"
                    },
                    {
                        "name": "pur_grn",
                        "type": "single"
                    },
                    {
                        "name": "pur_grn_item",
                        "type": "single"
                    },
                    {
                        "name": "pur_vendor",
                        "type": "single"
                    },
                    {
                        "name": "user_pu",
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
        { key: 'airworthiness', show: true },
        { key: 'certificationNo', show: true },
        { key: 'createdAt', show: true },
        { key: 'datePcrl', show: true },
        { key: 'datePur', show: true },
        { key: 'dateQa', show: true },
        { key: 'description', show: true },
        { key: 'draftBin', show: true },
        { key: 'isServiceable', show: true },
        { key: 'lifeLimitCycle', show: true },
        { key: 'lifeLimitHours', show: true },
        { key: 'lifeLimitVal', show: true },
        { key: 'lifeLimitVar', show: true },
        { key: 'loopIndex', show: true },
        { key: 'manufacture', show: true },
        { key: 'manufactureDate', show: true },
        { key: 'notePcrl', show: true },
        { key: 'partCheckingPur', show: true },
        { key: 'partCheckingQa', show: true },
        { key: 'prclParent', show: true },
        { key: 'price', show: true },
        { key: 'qtyCheck', show: true },
        { key: 'qtyPrcl', show: true },
        { key: 'qtyReturn', show: true },
        { key: 'qualityCheck', show: true },
        { key: 'refDate', show: true },
        { key: 'refId', show: true },
        { key: 'refNumber', show: true },
        { key: 'service', show: true },
        { key: 'sn', show: true },
        { key: 'statusPrcl', show: true },
        { key: 'tboCycle', show: true },
        { key: 'tboHours', show: true },
        { key: 'tboVal', show: true },
        { key: 'tboVar', show: true },
        { key: 'tsnCycle', show: true },
        { key: 'tsnHours', show: true },
        { key: 'tsnVal', show: true },
        { key: 'tsnVar', show: true },
        { key: 'tsoCycle', show: true },
        { key: 'tsoHours', show: true },
        { key: 'tsoVal', show: true },
        { key: 'tsoVar', show: true },
        { key: 'typePrcl', show: true },
        { key: 'updatedAt', show: true },
        { key: 'validasi', show: true },
        { key: 'warrantyCycle', show: true },
        { key: 'warrantyDays', show: true },
        { key: 'warrantyHours', show: true },
        { key: 'warrantyMonths', show: true },
        { key: 'warrantyStartCycle', show: true },
        { key: 'warrantyStartDate', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('purPrcl_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('purPrcl_columns');
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
                console.warn('Gagal parse purPrcl dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('pur-prcl', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<PurPrclShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: PurPrclShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsPurPrclDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<PurPrclShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: PurPrclShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idPurPrcl: data.idPurPrcl
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