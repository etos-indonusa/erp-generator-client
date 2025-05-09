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
import { TdDetailReportService, TdDetailService, UsersService } from 'de-sdk-core';
import { AmimsTdDetailDto } from 'de-sdk-core';
import { TdDetailShareAddComponent } from '../td-detail-share-add/td-detail-share-add.component';
import { TdDetailShareDetailComponent } from '../td-detail-share-detail/td-detail-share-detail.component';
import { ActypeService } from 'de-sdk-core';
import { TdService } from 'de-sdk-core';



@Component({
    selector: 'app-td-detail-share-list',
    templateUrl: './td-detail-share-list.component.html',
    styleUrl: './td-detail-share-list.component.scss'
})
export class TdDetailShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idAcc') idAcc: string | null = null;

    @Input('idAccQa') idAccQa: string | null = null;

    @Input('idActype') idActype: string | null = null;

    @Input('idTd') idTd: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private tdDetailReportService: TdDetailReportService,
        private tdDetailService: TdDetailService,
        private tokenService: TokenService,

        private usersService: UsersService,
        private actypeService: ActypeService,
        private tdService: TdService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_tdDetail = this.status == 'semua' ? null : this.status;



        if (changes.idAcc) {
            this.filterAcc.idAcc = this.idAcc
        }


        if (changes.idAccQa) {
            this.filterAccQa.idAccQa = this.idAccQa
        }


        if (changes.idActype) {
            this.filterActype.idActype = this.idActype
        }


        if (changes.idTd) {
            this.filterTd.idTd = this.idTd
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllAcc();
        this.getAllAccQa();
        this.getAllActype();
        this.getAllTd();
    }


    listAcc: any[] = [];

    listAccQa: any[] = [];

    listActype: any[] = [];

    listTd: any[] = [];

    //untuak filter dari prent

    filterAcc: any = {}

    filterAccQa: any = {}

    filterActype: any = {}

    filterTd: any = {}


    // untuk fungsi get ALL relation
    getAllAcc() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listAcc = data.data ?? []
        );
    }
    getAllAccQa() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listAccQa = data.data ?? []
        );
    }
    getAllActype() {
        this.actypeService.actypeControllerFindAll().subscribe(
            data => this.listActype = data.data ?? []
        );
    }
    getAllTd() {
        this.tdService.tdControllerFindAll().subscribe(
            data => this.listTd = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        dateAccRange: null,
        dateAccQaRange: null,
        dateDetailRange: null,
        idAcc: null,
        idAccQa: null,
        idActype: null,
        idTd: null,
        isEngineer: null,
        isPilot: null,
        isQc: null,
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
    search_field: string[] = ["applicable", "fileDetail", "isEngineer", "isPilot", "isQc", "method", "noteDetail", "numberDetail", "priority", "subject", "typeDetail"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateAccRange: null,
            dateAccQaRange: null,
            dateDetailRange: null,
            idAcc: null,
            idAccQa: null,
            idActype: null,
            idTd: null,
            isEngineer: null,
            isPilot: null,
            isQc: null,
            validasiMin: null,
            validasiMax: null
        };
        this.filter.status_tdDetail = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_td_detail`] = { isNotNull: 'aktif' };

        this.tdDetailReportService.tdDetailReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "acc": this.filterAcc, type: 'inner'
                    },
                    {
                        "acc_qa": this.filterAccQa, type: 'inner'
                    },
                    {
                        "actype": this.filterActype, type: 'inner'
                    },
                    {
                        "td": this.filterTd, type: 'inner'
                    }
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "acc",
                        "type": "single"
                    },
                    {
                        "name": "acc_qa",
                        "type": "single"
                    },
                    {
                        "name": "actype",
                        "type": "single"
                    },
                    {
                        "name": "td",
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
        { key: 'applicable', show: true },
        { key: 'createdAt', show: true },
        { key: 'dateAcc', show: true },
        { key: 'dateAccQa', show: true },
        { key: 'dateDetail', show: true },
        { key: 'fileDetail', show: true },
        { key: 'isEngineer', show: true },
        { key: 'isPilot', show: true },
        { key: 'isQc', show: true },
        { key: 'method', show: true },
        { key: 'noteDetail', show: true },
        { key: 'numberDetail', show: true },
        { key: 'priority', show: true },
        { key: 'statusTdDetail', show: true },
        { key: 'subject', show: true },
        { key: 'typeDetail', show: true },
        { key: 'updatedAt', show: true },
        { key: 'validasi', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('tdDetail_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('tdDetail_columns');
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
                console.warn('Gagal parse tdDetail dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('td-detail', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<TdDetailShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: TdDetailShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsTdDetailDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<TdDetailShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: TdDetailShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idTdDetail: data.idTdDetail
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