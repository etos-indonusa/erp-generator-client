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
import { MpcJoOperatorReportService, MpcJoOperatorService, UsersService } from 'de-sdk-core';
import { AmimsMpcJoOperatorDto } from 'de-sdk-core';
import { MpcJoOperatorShareAddComponent } from '../mpc-jo-operator-share-add/mpc-jo-operator-share-add.component';
import { MpcJoOperatorShareDetailComponent } from '../mpc-jo-operator-share-detail/mpc-jo-operator-share-detail.component';
import { MpcJoService } from 'de-sdk-core';



@Component({
    selector: 'app-mpc-jo-operator-share-list',
    templateUrl: './mpc-jo-operator-share-list.component.html',
    styleUrl: './mpc-jo-operator-share-list.component.scss'
})
export class MpcJoOperatorShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idMpcJo') idMpcJo: string | null = null;

    @Input('idOperator') idOperator: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private mpcJoOperatorReportService: MpcJoOperatorReportService,
        private mpcJoOperatorService: MpcJoOperatorService,
        private tokenService: TokenService,

        private mpcJoService: MpcJoService,
        private usersService: UsersService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_mpcJoOperator = this.status == 'semua' ? null : this.status;



        if (changes.idMpcJo) {
            this.filterMpcJo.idMpcJo = this.idMpcJo
        }


        if (changes.idOperator) {
            this.filterOperator.idOperator = this.idOperator
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllMpcJo();
        this.getAllOperator();
    }


    listMpcJo: any[] = [];

    listOperator: any[] = [];

    //untuak filter dari prent

    filterMpcJo: any = {}

    filterOperator: any = {}


    // untuk fungsi get ALL relation
    getAllMpcJo() {
        this.mpcJoService.mpcJoControllerFindAll().subscribe(
            data => this.listMpcJo = data.data ?? []
        );
    }
    getAllOperator() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listOperator = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        idMpcJo: null,
        idOperator: null
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
    search_field: string[] = ["jobDesc", "operator", "position"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idMpcJo: null,
            idOperator: null
        };
        this.filter.status_mpcJoOperator = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_mpc_jo_operator`] = { isNotNull: 'aktif' };

        this.mpcJoOperatorReportService.mpcJoOperatorReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "mpc_jo": this.filterMpcJo, type: 'inner'
                    },
                    {
                        "operator": this.filterOperator, type: 'inner'
                    }
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "mpc_jo",
                        "type": "single"
                    },
                    {
                        "name": "operator",
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
        { key: 'jobDesc', show: true },
        { key: 'operator', show: true },
        { key: 'position', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('mpcJoOperator_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('mpcJoOperator_columns');
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
                console.warn('Gagal parse mpcJoOperator dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('mpc-jo-operator', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<MpcJoOperatorShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: MpcJoOperatorShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsMpcJoOperatorDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<MpcJoOperatorShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: MpcJoOperatorShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idMpcJoOperator: data.idMpcJoOperator
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