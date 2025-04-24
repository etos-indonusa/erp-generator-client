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
import { PartReportService, PartService } from 'de-sdk-core';
import { AmimsPartDto } from 'de-sdk-core';
import { PartShareAddComponent } from '../part-share-add/part-share-add.component';
import { PartShareDetailComponent } from '../part-share-detail/part-share-detail.component';
import { ConditionMonitoringService } from 'de-sdk-core';
import { CurrencyService } from 'de-sdk-core';
import { LifeTimeLimitService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';
import { PartConditionService } from 'de-sdk-core';
import { PurGrnService } from 'de-sdk-core';
import { PurPoItemService } from 'de-sdk-core';
import { PurPrclService } from 'de-sdk-core';
import { PurVendorService } from 'de-sdk-core';
import { SiteService } from 'de-sdk-core';
import { TypeOfworkService } from 'de-sdk-core';
import { WarrantyService } from 'de-sdk-core';



@Component({
    selector: 'app-part-share-list',
    templateUrl: './part-share-list.component.html',
    styleUrl: './part-share-list.component.scss'
})
export class PartShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idConditionMonitoring') idConditionMonitoring: string | null = null;

    @Input('idCurrency') idCurrency: string | null = null;

    @Input('idLifeTimeLimit') idLifeTimeLimit: string | null = null;

    @Input('idMpart') idMpart: string | null = null;

    @Input('idPartCondition') idPartCondition: string | null = null;

    @Input('idPurGrn') idPurGrn: string | null = null;

    @Input('idPurPoItem') idPurPoItem: string | null = null;

    @Input('idPurPrcl') idPurPrcl: string | null = null;

    @Input('idPurVendor') idPurVendor: string | null = null;

    @Input('idSite') idSite: string | null = null;

    @Input('idTypeOfwork') idTypeOfwork: string | null = null;

    @Input('idUser') idUser: string | null = null;

    @Input('idWarranty') idWarranty: string | null = null;
    @Input('idBin') idBin: string | null = null;


    constructor(
        private pesanService: PesanService,
        private cd: ChangeDetectorRef,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private partReportService: PartReportService,
        private partService: PartService,
        private tokenService: TokenService,

        private conditionMonitoringService: ConditionMonitoringService,
        private currencyService: CurrencyService,
        private lifeTimeLimitService: LifeTimeLimitService,
        private mpartService: MpartService,
        private partConditionService: PartConditionService,
        private purGrnService: PurGrnService,
        private purPoItemService: PurPoItemService,
        private purPrclService: PurPrclService,
        private purVendorService: PurVendorService,
        private siteService: SiteService,
        private typeOfworkService: TypeOfworkService,
        private warrantyService: WarrantyService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.statusOnInventory = this.status == 'semua' ? null : this.status;



        if (changes.idConditionMonitoring) {
            this.filterConditionMonitoring.idConditionMonitoring = this.idConditionMonitoring
        }


        if (changes.idCurrency) {
            this.filterCurrency.idCurrency = this.idCurrency
        }


        if (changes.idLifeTimeLimit) {
            this.filterLifeTimeLimit.idLifeTimeLimit = this.idLifeTimeLimit
        }


        if (changes.idMpart) {
            this.filterMpart.idMpart = this.idMpart
        }


        if (changes.idPartCondition) {
            this.filterPartCondition.idPartCondition = this.idPartCondition
        }


        if (changes.idPurGrn) {
            this.filterPurGrn.idPurGrn = this.idPurGrn
        }


        if (changes.idPurPoItem) {
            this.filterPurPoItem.idPurPoItem = this.idPurPoItem
        }


        if (changes.idPurPrcl) {
            this.filterPurPrcl.idPurPrcl = this.idPurPrcl
        }


        if (changes.idPurVendor) {
            this.filterPurVendor.idPurVendor = this.idPurVendor
        }


        if (changes.idSite) {
            this.filterSite.idSite = this.idSite
        }


        if (changes.idTypeOfwork) {
            this.filterTypeOfwork.idTypeOfwork = this.idTypeOfwork
        }


        if (changes.idUser) {
            this.filterUser.idUser = this.idUser
        }


        if (changes.idWarranty) {
            this.filterWarranty.idWarranty = this.idWarranty
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllConditionMonitoring(); 
        this.getAllLifeTimeLimit(); 
        this.getAllPartCondition(); 
        this.getAllPurVendor();
        this.getAllSite();
        this.getAllTypeOfwork(); 
    }


    listConditionMonitoring: any[] = [];

    listCurrency: any[] = [];

    listLifeTimeLimit: any[] = [];

    listMpart: any[] = [];

    listPartCondition: any[] = [];

    listPurGrn: any[] = [];

    listPurPoItem: any[] = [];

    listPurPrcl: any[] = [];

    listPurVendor: any[] = [];

    listSite: any[] = [];

    listTypeOfwork: any[] = [];

    listUser: any[] = [];

    listWarranty: any[] = [];

    //untuak filter dari prent

    filterConditionMonitoring: any = {}

    filterCurrency: any = {}

    filterLifeTimeLimit: any = {}

    filterMpart: any = {}

    filterPartCondition: any = {}

    filterPurGrn: any = {}

    filterPurPoItem: any = {}

    filterPurPrcl: any = {}

    filterPurVendor: any = {}

    filterSite: any = {}

    filterTypeOfwork: any = {}

    filterUser: any = {}

    filterWarranty: any = {}


    // untuk fungsi get ALL relation
    getAllConditionMonitoring() {
        this.conditionMonitoringService.conditionMonitoringControllerFindAll().subscribe(
            data => this.listConditionMonitoring = data.data ?? []
        );
    }
    
    getAllLifeTimeLimit() {
        this.lifeTimeLimitService.lifeTimeLimitControllerFindAll().subscribe(
            data => this.listLifeTimeLimit = data.data ?? []
        );
    }
    
    getAllPartCondition() {
        this.partConditionService.partConditionControllerFindAll().subscribe(
            data => this.listPartCondition = data.data ?? []
        );
    }
    
    getAllPurVendor() {
        this.purVendorService.purVendorControllerFindAll({
            filter: JSON.stringify({ isManufacture: 'y', status: 'Active' })
        }).subscribe(
            data => this.listPurVendor = data.data ?? []
        );
    }
    getAllSite() {
        this.siteService.siteControllerFindAll().subscribe(
            data => this.listSite = data.data ?? []
        );
    }
    getAllTypeOfwork() {
        this.typeOfworkService.typeOfworkControllerFindAll().subscribe(
            data => this.listTypeOfwork = data.data ?? []
        );
    }



    currentUser: any = {};
    filter: any = {
        dateOrderRange: null,
        firstInstallCMin: null,
        firstInstallCMax: null,
        firstInstallDateRange: null,
        firstInstallHMin: null,
        firstInstallHMax: null,
        idConditionMonitoring: null,
        idCurrency: null,
        idLifeTimeLimit: null,
        idMpart: null,
        idPartCondition: null,
        idPurGrn: null,
        idPurPoItem: null,
        idPurPrcl: null,
        idPurVendor: null,
        idSite: null,
        idTypeOfwork: null,
        idUser: null,
        idWarranty: null,
        isDeleted: null,
        lifeLimitCycleMin: null,
        lifeLimitCycleMax: null,
        lifeLimitHoursMin: null,
        lifeLimitHoursMax: null,
        lifeLimitValMin: null,
        lifeLimitValMax: null,
        manufactureDateRange: null,
        newFirstInstallHMin: null,
        newFirstInstallHMax: null,
        priceMin: null,
        priceMax: null,
        purchaseDateRange: null,
        qtyMin: null,
        qtyMax: null,
        startInstallCMin: null,
        startInstallCMax: null,
        startInstallDateRange: null,
        startInstallHMin: null,
        startInstallHMax: null,
        tbiCycleMin: null,
        tbiCycleMax: null,
        tbiHoursMin: null,
        tbiHoursMax: null,
        tbiValMin: null,
        tbiValMax: null,
        tboCycleMin: null,
        tboCycleMax: null,
        tboHoursMin: null,
        tboHoursMax: null,
        tboValMin: null,
        tboValMax: null,
        tempUseMin: null,
        tempUseMax: null,
        tsiCycleMin: null,
        tsiCycleMax: null,
        tsiHoursMin: null,
        tsiHoursMax: null,
        tsiValMin: null,
        tsiValMax: null,
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
        warrantyCycleMin: null,
        warrantyCycleMax: null,
        warrantyDaysMin: null,
        warrantyDaysMax: null,
        warrantyHoursMin: null,
        warrantyHoursMax: null,
        warrantyStartCycleMin: null,
        warrantyStartCycleMax: null,
        warrantyStartDateRange: null,
        warrantyValMin: null,
        warrantyValMax: null,
        warrantyYearsMin: null,
        warrantyYearsMax: null
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
    search_field: string[] = ["bin", "certificationNo", "endOfLife", "firstInstallDate", "groupStatus", "lifeLimitVar", "manufacture", "manufactureDate", "oldId", "oldParent", "partParent", "position", "purchaseDate", "sn", "startInstallDate", "tbiVar", "tboVar", "tsiVar", "tsnVar", "tsoVar", "useableStatus", "warrantyStartDate"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateOrderRange: null,
            firstInstallCMin: null,
            firstInstallCMax: null,
            firstInstallDateRange: null,
            firstInstallHMin: null,
            firstInstallHMax: null,
            idConditionMonitoring: null,
            idCurrency: null,
            idLifeTimeLimit: null,
            idMpart: null,
            idPartCondition: null,
            idPurGrn: null,
            idPurPoItem: null,
            idPurPrcl: null,
            idPurVendor: null,
            idSite: null,
            idTypeOfwork: null,
            idUser: null,
            idWarranty: null,
            isDeleted: null,
            lifeLimitCycleMin: null,
            lifeLimitCycleMax: null,
            lifeLimitHoursMin: null,
            lifeLimitHoursMax: null,
            lifeLimitValMin: null,
            lifeLimitValMax: null,
            manufactureDateRange: null,
            newFirstInstallHMin: null,
            newFirstInstallHMax: null,
            priceMin: null,
            priceMax: null,
            purchaseDateRange: null,
            qtyMin: null,
            qtyMax: null,
            startInstallCMin: null,
            startInstallCMax: null,
            startInstallDateRange: null,
            startInstallHMin: null,
            startInstallHMax: null,
            tbiCycleMin: null,
            tbiCycleMax: null,
            tbiHoursMin: null,
            tbiHoursMax: null,
            tbiValMin: null,
            tbiValMax: null,
            tboCycleMin: null,
            tboCycleMax: null,
            tboHoursMin: null,
            tboHoursMax: null,
            tboValMin: null,
            tboValMax: null,
            tempUseMin: null,
            tempUseMax: null,
            tsiCycleMin: null,
            tsiCycleMax: null,
            tsiHoursMin: null,
            tsiHoursMax: null,
            tsiValMin: null,
            tsiValMax: null,
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
            warrantyCycleMin: null,
            warrantyCycleMax: null,
            warrantyDaysMin: null,
            warrantyDaysMax: null,
            warrantyHoursMin: null,
            warrantyHoursMax: null,
            warrantyStartCycleMin: null,
            warrantyStartCycleMax: null,
            warrantyStartDateRange: null,
            warrantyValMin: null,
            warrantyValMax: null,
            warrantyYearsMin: null,
            warrantyYearsMax: null
        };
        this.filter.statusOnInventory = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_part`] = { isNotNull: 'aktif' };
        finalFilter[`bin`] = this.idBin;

        this.partReportService.partReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "condition_monitoring": this.filterConditionMonitoring, type: 'left'
                    },
                    {
                        "currency": this.filterCurrency, type: 'left'
                    },
                    // {
                    //     "life_time_limit": this.filterLifeTimeLimit, type: 'inner'
                    // },
                    {
                        "mpart": this.filterMpart, type: 'inner'
                    },
                    // {
                    //     "part_condition": this.filterPartCondition, type: 'left'
                    // },
                    // {
                    //     "pur_grn": this.filterPurGrn, type: 'inner'
                    // },
                    // {
                    //     "pur_po_item": this.filterPurPoItem, type: 'inner'
                    // },
                    // {
                    //     "pur_prcl": this.filterPurPrcl, type: 'inner'
                    // },
                    // {
                    //     "pur_vendor": this.filterPurVendor, type: 'inner'
                    // },
                    {
                        "site": this.filterSite, type: 'left'
                    },
                    // {
                    //     "type_ofwork": this.filterTypeOfwork, type: 'inner'
                    // },
                    // {
                    //     "user": this.filterUser, type: 'inner'
                    // },
                    // {
                    //     "warranty": this.filterWarranty, type: 'inner'
                    // }
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
                        "name": "life_time_limit",
                        "type": "single"
                    },
                    {
                        "name": "mpart",
                        "type": "single"
                    },
                    {
                        "name": "part_condition",
                        "type": "single"
                    },
                    // {
                    //     "name": "pur_grn",
                    //     "type": "single"
                    // },
                    // {
                    //     "name": "pur_po_item",
                    //     "type": "single"
                    // },
                    // {
                    //     "name": "pur_prcl",
                    //     "type": "single"
                    // },
                    // {
                    //     "name": "pur_vendor",
                    //     "type": "single"
                    // },
                    {
                        "name": "site",
                        "type": "single"
                    },
                    {
                        "name": "type_ofwork",
                        "type": "single"
                    },
                    // {
                    //     "name": "user",
                    //     "type": "single"
                    // },
                    // {
                    //     "name": "warranty",
                    //     "type": "single"
                    // }
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
        { key: 'bin', show: true },
        { key: 'certificationNo', show: true },
        { key: 'createdAt', show: false },
        { key: 'dateOrder', show: false },
        { key: 'endOfLife', show: false },
        { key: 'firstInstallC', show: false },
        { key: 'firstInstallDate', show: false },
        { key: 'firstInstallH', show: false }, 
        { key: 'isDeleted', show: false },
        { key: 'lifeLimitCycle', show: false },
        { key: 'lifeLimitHours', show: false },
        { key: 'lifeLimitVal', show: false },
        { key: 'lifeLimitVar', show: false },
        { key: 'manufacture', show: true },
        { key: 'manufactureDate', show: false },
        { key: 'newFirstInstallH', show: false }, 
        { key: 'position', show: false },
        { key: 'price', show: true },
        { key: 'purchaseDate', show: false },
        { key: 'qty', show: true },
        { key: 'sn', show: true },
        { key: 'keyword', show: true },
        { key: 'startInstallC', show: false },
        { key: 'startInstallDate', show: false },
        { key: 'startInstallH', show: false },
        { key: 'statusOnInventory', show: true },
        { key: 'tbiCycle', show: false },
        { key: 'tbiHours', show: false },
        { key: 'tbiVal', show: false },
        { key: 'tbiVar', show: false },
        { key: 'tboCycle', show: false },
        { key: 'tboHours', show: false },
        { key: 'tboVal', show: false },
        { key: 'tboVar', show: false },
        { key: 'tempUse', show: false },
        { key: 'tsiCycle', show: false },
        { key: 'tsiHours', show: false },
        { key: 'tsiVal', show: false },
        { key: 'tsiVar', show: false },
        { key: 'tsnCycle', show: false },
        { key: 'tsnHours', show: false },
        { key: 'tsnVal', show: false },
        { key: 'tsnVar', show: false },
        { key: 'tsoCycle', show: false },
        { key: 'tsoHours', show: false },
        { key: 'tsoVal', show: false },
        { key: 'tsoVar', show: false },
        { key: 'updatedAt', show: false },
        { key: 'useableStatus', show: false },
        { key: 'warrantyCycle', show: false },
        { key: 'warrantyDays', show: false },
        { key: 'warrantyHours', show: false },
        { key: 'warrantyStartCycle', show: false },
        { key: 'warrantyStartDate', show: false },
        { key: 'warrantyVal', show: false },
        { key: 'warrantyYears', show: false },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('part_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('part_columns');
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
                console.warn('Gagal parse part dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('part', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<PartShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: PartShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsPartDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<PartShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: PartShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idPart: data.idPart
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