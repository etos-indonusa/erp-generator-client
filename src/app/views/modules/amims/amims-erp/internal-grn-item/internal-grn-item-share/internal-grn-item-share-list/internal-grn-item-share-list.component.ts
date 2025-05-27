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
import { InternalGrnItemReportService, InternalGrnItemService } from 'de-sdk-core';
import { AmimsInternalGrnItemDto } from 'de-sdk-core';
import { InternalGrnItemShareAddComponent } from '../internal-grn-item-share-add/internal-grn-item-share-add.component';
import { InternalGrnItemShareDetailComponent } from '../internal-grn-item-share-detail/internal-grn-item-share-detail.component';
import { EngineerPrisItemService } from 'de-sdk-core';
import { InternalGrnService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';



@Component({
    selector: 'app-internal-grn-item-share-list',
    templateUrl: './internal-grn-item-share-list.component.html',
    styleUrl: './internal-grn-item-share-list.component.scss'
})
export class InternalGrnItemShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idEngineerPrisItem') idEngineerPrisItem: string | null = null;

    @Input('idInternalGrn') idInternalGrn: string | null = null;

    @Input('idMpart') idMpart: string | null = null;

    @Input('idPart') idPart: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private internalGrnItemReportService: InternalGrnItemReportService,
        private internalGrnItemService: InternalGrnItemService,
        private tokenService: TokenService,

        private engineerPrisItemService: EngineerPrisItemService,
        private internalGrnService: InternalGrnService,
        private mpartService: MpartService,
        private partService: PartService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_internalGrnItem = this.status == 'semua' ? null : this.status;



        if (changes.idEngineerPrisItem) {
            this.filterEngineerPrisItem.idEngineerPrisItem = this.idEngineerPrisItem
        }


        if (changes.idInternalGrn) {
            this.filterInternalGrn.idInternalGrn = this.idInternalGrn
        }


        if (changes.idMpart) {
            this.filterMpart.idMpart = this.idMpart
        }


        if (changes.idPart) {
            this.filterPart.idPart = this.idPart
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllEngineerPrisItem();
        this.getAllInternalGrn();
        this.getAllMpart();
        this.getAllPart();
    }


    listEngineerPrisItem: any[] = [];

    listInternalGrn: any[] = [];

    listMpart: any[] = [];

    listPart: any[] = [];

    //untuak filter dari prent

    filterEngineerPrisItem: any = {}

    filterInternalGrn: any = {}

    filterMpart: any = {}

    filterPart: any = {}


    // untuk fungsi get ALL relation
    getAllEngineerPrisItem() {
        this.engineerPrisItemService.engineerPrisItemControllerFindAll().subscribe(
            data => this.listEngineerPrisItem = data.data ?? []
        );
    }
    getAllInternalGrn() {
        this.internalGrnService.internalGrnControllerFindAll().subscribe(
            data => this.listInternalGrn = data.data ?? []
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

    currentUser: any = {};
    filter: any = {
        idEngineerPrisItem: null,
        idInternalGrn: null,
        idMpart: null,
        idPart: null,
        qtyGrnMin: null,
        qtyGrnMax: null
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
    search_field: string[] = ["remark"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idEngineerPrisItem: null,
            idInternalGrn: null,
            idMpart: null,
            idPart: null,
            qtyGrnMin: null,
            qtyGrnMax: null
        };
        this.filter.status_internalGrnItem = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_internal_grn_item`] = { isNotNull: 'aktif' };

        this.internalGrnItemReportService.internalGrnItemReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "engineer_pris_item": this.filterEngineerPrisItem, type: 'inner'
                    },
                    {
                        "internal_grn": this.filterInternalGrn, type: 'inner'
                    },
                    {
                        "mpart": this.filterMpart, type: 'inner'
                    },
                    {
                        "part": this.filterPart, type: 'inner'
                    }
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "engineer_pris_item",
                        "type": "single"
                    },
                    {
                        "name": "internal_grn",
                        "type": "single"
                    },
                    {
                        "name": "mpart",
                        "type": "single"
                    },
                    {
                        "name": "part",
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
        { key: 'createdAt', show: true },
        { key: 'qtyGrn', show: true },
        { key: 'remark', show: true },
        { key: 'statusItem', show: true },
        { key: 'updatedAt', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('internalGrnItem_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('internalGrnItem_columns');
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
                console.warn('Gagal parse internalGrnItem dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('internal-grn-item', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<InternalGrnItemShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: InternalGrnItemShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsInternalGrnItemDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<InternalGrnItemShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: InternalGrnItemShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idInternalGrnItem: data.idInternalGrnItem
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