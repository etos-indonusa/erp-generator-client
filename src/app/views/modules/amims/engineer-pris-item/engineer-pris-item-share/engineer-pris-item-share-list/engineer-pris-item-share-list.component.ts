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
import { EngineerPrisItemReportService, EngineerPrisItemService } from 'de-sdk-core/lib/services';
import { AmimsEngineerPrisItemDto } from 'de-sdk-core/lib/models';
import { EngineerPrisItemShareAddComponent } from '../engineer-pris-item-share-add/engineer-pris-item-share-add.component';
import { EngineerPrisItemShareDetailComponent } from '../engineer-pris-item-share-detail/engineer-pris-item-share-detail.component';
import { EngineerPrisService } from 'de-sdk-core/lib/services';
import { PartService } from 'de-sdk-core/lib/services';
import { EngineerRtiService } from 'de-sdk-core/lib/services';

 

@Component({
    selector: 'app-engineer-pris-item-share-list',
    templateUrl: './engineer-pris-item-share-list.component.html',
    styleUrl: './engineer-pris-item-share-list.component.scss'
})
export class EngineerPrisItemShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idEngineerPris') idEngineerPris: string | null = null;

    @Input('idPart') idPart: string | null = null;

    @Input('idPartRemove') idPartRemove: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private engineerPrisItemReportService: EngineerPrisItemReportService,
        private engineerPrisItemService: EngineerPrisItemService,
        private tokenService: TokenService,

        private engineerPrisService: EngineerPrisService,
        private partService: PartService,
        private partRemoveService: EngineerRtiService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_engineerPrisItem = this.status == 'semua' ? null : this.status;



        if (changes.idEngineerPris) {
            this.filterEngineerPris.idEngineerPris = this.idEngineerPris
        }


        if (changes.idPart) {
            this.filterPart.idPart = this.idPart
        }


        if (changes.idPartRemove) {
            this.filterPartRemove.idPartRemove = this.idPartRemove
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllEngineerPris();
        this.getAllPart();
        this.getAllPartRemove();
    }


    listEngineerPris: any[] = [];

    listPart: any[] = [];

    listPartRemove: any[] = [];

    //untuak filter dari prent

    filterEngineerPris: any = {}

    filterPart: any = {}

    filterPartRemove: any = {}


    // untuk fungsi get ALL relation
    getAllEngineerPris() {
        this.engineerPrisService.engineerPrisControllerFindAll().subscribe(
            data => this.listEngineerPris = data.data ?? []
        );
    }
    getAllPart() {
        this.partService.partControllerFindAll().subscribe(
            data => this.listPart = data.data ?? []
        );
    }
    getAllPartRemove() {
        this.partRemoveService.engineerRtiControllerFindAll().subscribe(
            data => this.listPartRemove = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        idEngineerPris: null,
        idPart: null,
        idPartRemove: null,
        isDeleted: null,
        partOnDateRange: null,
        qtyInstallMin: null,
        qtyInstallMax: null,
        qtyPrisMin: null,
        qtyPrisMax: null,
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
        tsoValMax: null
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
    search_field: string[] = ["fromPart", "hashTechLog", "noteItemPris", "partOnDate"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idEngineerPris: null,
            idPart: null,
            idPartRemove: null,
            isDeleted: null,
            partOnDateRange: null,
            qtyInstallMin: null,
            qtyInstallMax: null,
            qtyPrisMin: null,
            qtyPrisMax: null,
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
            tsoValMax: null
        };
        this.filter.status_engineerPrisItem = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_engineer_pris_item`] = { isNotNull: 'aktif' };

        this.engineerPrisItemReportService.engineerPrisItemReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "engineer_pris": this.filterEngineerPris, type: 'inner'
                    },
                    {
                        "part": this.filterPart, type: 'inner'
                    },
                    {
                        "part_remove": this.filterPartRemove, type: 'inner'
                    }
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "engineer_pris",
                        "type": "single"
                    },
                    {
                        "name": "part",
                        "type": "single"
                    },
                    {
                        "name": "part_remove",
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
        { key: 'fromPart', show: true },
        { key: 'hashTechLog', show: true },
        { key: 'isDeleted', show: true },
        { key: 'noteItemPris', show: true },
        { key: 'partOnDate', show: true },
        { key: 'qtyInstall', show: true },
        { key: 'qtyPris', show: true },
        { key: 'statusItem', show: true },
        { key: 'tsnCycle', show: true },
        { key: 'tsnHours', show: true },
        { key: 'tsnVal', show: true },
        { key: 'tsoCycle', show: true },
        { key: 'tsoHours', show: true },
        { key: 'tsoVal', show: true },
        { key: 'updatedAt', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('engineerPrisItem_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('engineerPrisItem_columns');
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
                console.warn('Gagal parse engineerPrisItem dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('engineer-pris-item', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<EngineerPrisItemShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: EngineerPrisItemShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsEngineerPrisItemDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<EngineerPrisItemShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: EngineerPrisItemShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idEngineerPrisItem: data.idEngineerPrisItem
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