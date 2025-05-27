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
import { MpartReportService, MpartService } from 'de-sdk-core';
import { AmimsMpartDto } from 'de-sdk-core';
import { MpartShareAddComponent } from '../mpart-share-add/mpart-share-add.component';
import { MpartShareDetailComponent } from '../mpart-share-detail/mpart-share-detail.component';
import { AtaService } from 'de-sdk-core';
import { ConditionMonitoringService } from 'de-sdk-core';
import { LifeTimeLimitService } from 'de-sdk-core';
import { PartCategoryService } from 'de-sdk-core';
import { PartidService } from 'de-sdk-core';



@Component({
    selector: 'app-mpart-share-list',
    templateUrl: './mpart-share-list.component.html',
    styleUrl: './mpart-share-list.component.scss'
})
export class MpartShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    @Input('idBin') idBin: any = null;
    //untuak filter dari prent

    @Input('idAta') idAta: string | null = null;

    @Input('idConditionMonitoring') idConditionMonitoring: string | null = null;

    @Input('idGroup') idGroup: string | null = null;

    @Input('idLifeTimeLimit') idLifeTimeLimit: string | null = null;

    @Input('idPartCategory') idPartCategory: string | null = null;

    @Input('idPartid') idPartid: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private mpartReportService: MpartReportService,
        private mpartService: MpartService,
        private tokenService: TokenService,
        private cd: ChangeDetectorRef,

        private ataService: AtaService,
        private conditionMonitoringService: ConditionMonitoringService,
        private lifeTimeLimitService: LifeTimeLimitService,
        private partCategoryService: PartCategoryService,
        private partidService: PartidService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_mpart = this.status == 'semua' ? null : this.status;



        if (changes.idAta) {

            this.filterAta.idAta = this.idAta
        }


        if (changes.idConditionMonitoring) {
            this.filterConditionMonitoring.idConditionMonitoring = this.idConditionMonitoring
        }


        if (changes.idGroup) {
            this.filterGroup.idGroup = this.idGroup
        }


        if (changes.idLifeTimeLimit) {
            this.filterLifeTimeLimit.idLifeTimeLimit = this.idLifeTimeLimit
        }


        if (changes.idPartCategory) {
            this.filterPartCategory.idPartCategory = this.idPartCategory
        }


        if (changes.idPartid) {
            this.filterPartid.idPartid = this.idPartid
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.filterAta.idAta = this.idAta

        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllAta();
        this.getAllConditionMonitoring();
        this.getAllLifeTimeLimit();
        this.getAllPartCategory();
        this.getAllPartid();


    }


    listAta: any[] = [];

    listConditionMonitoring: any[] = [];

    listGroup: any[] = [];

    listLifeTimeLimit: any[] = [];

    listPartCategory: any[] = [];

    listPartid: any[] = [];

    //untuak filter dari prent

    filterAta: any = {}

    filterConditionMonitoring: any = {}

    filterGroup: any = {}

    filterLifeTimeLimit: any = {}

    filterPartCategory: any = {}

    filterPartid: any = {}


    // untuk fungsi get ALL relation
    getAllAta() {
        this.ataService.ataControllerFindAll().subscribe(
            data => this.listAta = data.data ?? []
        );
    }
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
    getAllPartCategory() {
        this.partCategoryService.partCategoryControllerFindAll().subscribe(
            data => this.listPartCategory = data.data ?? []
        );
    }
    getAllPartid() {
        this.partidService.partidControllerFindAll().subscribe(
            data => this.listPartid = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        forAcMin: null,
        forAcMax: null,
        idAta: null,
        idConditionMonitoring: null,
        idGroup: null,
        idLifeTimeLimit: null,
        idPartCategory: null,
        idPartid: null,
        isDeleted: null,
        isMandatory: null,
        ismayor: null,
        lifeLimitCycleMin: null,
        lifeLimitCycleMax: null,
        lifeLimitHoursMin: null,
        lifeLimitHoursMax: null,
        lifeLimitValMin: null,
        lifeLimitValMax: null,
        minQtyMin: null,
        minQtyMax: null,
        mtboCycleMin: null,
        mtboCycleMax: null,
        mtboHoursMin: null,
        mtboHoursMax: null,
        mtboValMin: null,
        mtboValMax: null
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
    search_field: string[] = ["calculatedCycle", "calculatedHours", "childname", "codeAtaMentah", "descriptionMpart", "isMandatory", "ismayor", "keyword", "lifeLimitVar", "manufactureMpart", "mat_82", "mfigureIndex", "mitemIndex", "mtboVar", "oldAtachapter", "oldId", "parent", "partNumber", "partname", "unit"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            forAcMin: null,
            forAcMax: null,
            idAta: null,
            idConditionMonitoring: null,
            idGroup: null,
            idLifeTimeLimit: null,
            idPartCategory: null,
            idPartid: null,
            isDeleted: null,
            isMandatory: null,
            ismayor: null,
            lifeLimitCycleMin: null,
            lifeLimitCycleMax: null,
            lifeLimitHoursMin: null,
            lifeLimitHoursMax: null,
            lifeLimitValMin: null,
            lifeLimitValMax: null,
            minQtyMin: null,
            minQtyMax: null,
            mtboCycleMin: null,
            mtboCycleMax: null,
            mtboHoursMin: null,
            mtboHoursMax: null,
            mtboValMin: null,
            mtboValMax: null
        };
        this.filter.status_mpart = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_mpart`] = { isNotNull: 'aktif' };

        this.mpartReportService.mpartReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "ata": this.filterAta, type: 'left'
                    },
                    {
                        "condition_monitoring": this.filterConditionMonitoring, type: 'inner'
                    },
                    {
                        "partid": this.filterPartid, type: 'inner'
                    }
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "ata",
                        "type": "single"
                    },
                    {
                        "name": "condition_monitoring",
                        "type": "single"
                    },
                    {
                        "name": "group",
                        "type": "single"
                    },
                    {
                        "name": "life_time_limit",
                        "type": "single"
                    },
                    {
                        "name": "part_category",
                        "type": "single"
                    },
                    {
                        "name": "partid",
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
        // { key: 'calculatedCycle', show: true },
        // { key: 'calculatedHours', show: true },
        // { key: 'childname', show: true },
        { key: 'codeAtaMentah', show: true },
        { key: 'createdAt', show: false },
        { key: 'descriptionMpart', show: false },
        { key: 'forAc', show: false },
        { key: 'isDeleted', show: false },
        { key: 'isMandatory', show: true },
        { key: 'ismayor', show: false },
        { key: 'keyword', show: true },
        { key: 'lifeLimitCycle', show: false },
        { key: 'lifeLimitHours', show: false },
        { key: 'lifeLimitVal', show: false },
        { key: 'lifeLimitVar', show: false },
        { key: 'manufactureMpart', show: false },
        { key: 'mat_82', show: false },
        { key: 'mfigureIndex', show: false },
        { key: 'minQty', show: false },
        { key: 'mitemIndex', show: false },
        { key: 'mtboCycle', show: false },
        { key: 'mtboHours', show: false },
        { key: 'mtboVal', show: false },
        { key: 'mtboVar', show: false },   
        { key: 'partNumber', show: true },
        { key: 'partname', show: false },
        { key: 'idPartid', show: false },
        { key: 'idConditionMonitoring', show: false },
        { key: 'refMel', show: false },
        { key: 'statusMpart', show: true },
        { key: 'unit', show: true },
        { key: 'updatedAt', show: false },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('mpart_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('mpart_columns');
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
                console.warn('Gagal parse mpart dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('mpart', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<MpartShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: MpartShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsMpartDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<MpartShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: MpartShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idMpart: data.idMpart
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