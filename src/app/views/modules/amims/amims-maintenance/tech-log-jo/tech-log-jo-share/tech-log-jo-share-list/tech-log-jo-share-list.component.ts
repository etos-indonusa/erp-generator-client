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
import { TechLogJoReportService, TechLogJoService } from 'de-sdk-core';
import { AmimsTechLogJoDto } from 'de-sdk-core';
import { TechLogJoShareAddComponent } from '../tech-log-jo-share-add/tech-log-jo-share-add.component';
import { TechLogJoShareDetailComponent } from '../tech-log-jo-share-detail/tech-log-jo-share-detail.component';
import { MpcJoService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { TechLogService } from 'de-sdk-core';



@Component({
    selector: 'app-tech-log-jo-share-list',
    templateUrl: './tech-log-jo-share-list.component.html',
    styleUrl: './tech-log-jo-share-list.component.scss'
})
export class TechLogJoShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idMpcJo') idMpcJo: string | null = null;

    @Input('idPart') idPart: string | null = null;

    @Input('idTechLog') idTechLog: string | null = null;

    @Input('idTechLogClose') idTechLogClose: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private techLogJoReportService: TechLogJoReportService,
        private techLogJoService: TechLogJoService,
        private tokenService: TokenService,

        private mpcJoService: MpcJoService,
        private partService: PartService,
        private techLogService: TechLogService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_techLogJo = this.status == 'semua' ? null : this.status;



        if (changes.idMpcJo) {
            this.filterMpcJo.idMpcJo = this.idMpcJo
        }


        if (changes.idPart) {
            this.filterPart.idPart = this.idPart
        }


        if (changes.idTechLog) {
            this.filterTechLog.idTechLog = this.idTechLog
        }


        if (changes.idTechLogClose) {
            this.filterTechLogClose.idTechLogClose = this.idTechLogClose
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllMpcJo();
        this.getAllPart();
        this.getAllTechLog(); 
    }


    listMpcJo: any[] = [];

    listPart: any[] = [];

    listTechLog: any[] = [];

    listTechLogClose: any[] = [];

    //untuak filter dari prent

    filterMpcJo: any = {}

    filterPart: any = {}

    filterTechLog: any = {}

    filterTechLogClose: any = {}


    // untuk fungsi get ALL relation
    getAllMpcJo() {
        this.mpcJoService.mpcJoControllerFindAll().subscribe(
            data => this.listMpcJo = data.data ?? []
        );
    }
    getAllPart() {
        this.partService.partControllerFindAll().subscribe(
            data => this.listPart = data.data ?? []
        );
    }
    getAllTechLog() {
        this.techLogService.techLogControllerFindAll().subscribe(
            data => this.listTechLog = data.data ?? []
        );
    }
    

    currentUser: any = {};
    filter: any = {
        dateCloseRange: null,
        idMpcJo: null,
        idPart: null,
        idTechLog: null,
        idTechLogClose: null,
        isContinue: null
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
    search_field: string[] = ["isContinue", "timeClose"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateCloseRange: null,
            idMpcJo: null,
            idPart: null,
            idTechLog: null,
            idTechLogClose: null,
            isContinue: null
        };
        this.filter.status_techLogJo = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_tech_log_jo`] = { isNotNull: 'aktif' };

        this.techLogJoReportService.techLogJoReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "mpc_jo": this.filterMpcJo, type: 'inner'
                    },
                    {
                        "part": this.filterPart, type: 'inner'
                    },
                    {
                        "tech_log": this.filterTechLog, type: 'inner'
                    },
                    {
                        "tech_log_close": this.filterTechLogClose, type: 'inner'
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
                        "name": "part",
                        "type": "single"
                    },
                    {
                        "name": "tech_log",
                        "type": "single"
                    },
                    {
                        "name": "tech_log_close",
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
        { key: 'dateClose', show: true },
        { key: 'isContinue', show: true },
        { key: 'timeClose', show: true },
        { key: 'updatedAt', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('techLogJo_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('techLogJo_columns');
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
                console.warn('Gagal parse techLogJo dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('tech-log-jo', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<TechLogJoShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: TechLogJoShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsTechLogJoDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<TechLogJoShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: TechLogJoShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idTechLogJo: data.idTechLogJo
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