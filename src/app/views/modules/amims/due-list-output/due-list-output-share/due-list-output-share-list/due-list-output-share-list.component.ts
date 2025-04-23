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
import { DueListOutputReportService, DueListOutputService } from 'de-sdk-core/lib/services';
import { AmimsDueListOutputDto } from 'de-sdk-core/lib/models';
import { DueListOutputShareAddComponent } from '../due-list-output-share-add/due-list-output-share-add.component';
import { DueListOutputShareDetailComponent } from '../due-list-output-share-detail/due-list-output-share-detail.component';
import { AircraftService } from 'de-sdk-core/lib/services';
import { DueListService } from 'de-sdk-core/lib/services';
import { MpartService } from 'de-sdk-core/lib/services';
import { PartService } from 'de-sdk-core/lib/services';



@Component({
    selector: 'app-due-list-output-share-list',
    templateUrl: './due-list-output-share-list.component.html',
    styleUrl: './due-list-output-share-list.component.scss'
})
export class DueListOutputShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idAircraft') idAircraft: string | null = null;

    @Input('idDueList') idDueList: string | null = null;

    @Input('idMpart') idMpart: string | null = null;

    @Input('idPart') idPart: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private dueListOutputReportService: DueListOutputReportService,
        private dueListOutputService: DueListOutputService,
        private tokenService: TokenService,

        private aircraftService: AircraftService,
        private dueListService: DueListService,
        private mpartService: MpartService,
        private partService: PartService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_dueListOutput = this.status == 'semua' ? null : this.status;



        if (changes.idAircraft) {
            this.filterAircraft.idAircraft = this.idAircraft
        }


        if (changes.idDueList) {
            this.filterDueList.idDueList = this.idDueList
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

        this.getAllAircraft();
        this.getAllDueList();
        this.getAllMpart();
        this.getAllPart();
    }


    listAircraft: any[] = [];

    listDueList: any[] = [];

    listMpart: any[] = [];

    listPart: any[] = [];

    //untuak filter dari prent

    filterAircraft: any = {}

    filterDueList: any = {}

    filterMpart: any = {}

    filterPart: any = {}


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllDueList() {
        this.dueListService.dueListControllerFindAll().subscribe(
            data => this.listDueList = data.data ?? []
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
        dueCMin: null,
        dueCMax: null,
        dueHMin: null,
        dueHMax: null,
        dueTMin: null,
        dueTMax: null,
        idAircraft: null,
        idDueList: null,
        idMpart: null,
        idPart: null,
        ramainingMin: null,
        ramainingMax: null,
        toDueMin: null,
        toDueMax: null
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
    search_field: string[] = ["atInstall", "ata", "code", "currentPart", "dueAt", "installPart", "keyword", "noteDue", "partNumber", "peruntukan", "sn", "typeDue", "typeOfwork", "variabel"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dueCMin: null,
            dueCMax: null,
            dueHMin: null,
            dueHMax: null,
            dueTMin: null,
            dueTMax: null,
            idAircraft: null,
            idDueList: null,
            idMpart: null,
            idPart: null,
            ramainingMin: null,
            ramainingMax: null,
            toDueMin: null,
            toDueMax: null
        };
        this.filter.status_dueListOutput = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_due_list_output`] = { isNotNull: 'aktif' };

        this.dueListOutputReportService.dueListOutputReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "aircraft": this.filterAircraft, type: 'inner'
                    },
                    {
                        "due_list": this.filterDueList, type: 'inner'
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
                        "name": "aircraft",
                        "type": "single"
                    },
                    {
                        "name": "due_list",
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
        { key: 'atInstall', show: true },
        { key: 'ata', show: true },
        { key: 'code', show: true },
        { key: 'currentPart', show: true },
        { key: 'dueAt', show: true },
        { key: 'dueC', show: true },
        { key: 'dueH', show: true },
        { key: 'dueT', show: true },
        { key: 'installPart', show: true },
        { key: 'keyword', show: true },
        { key: 'noteDue', show: true },
        { key: 'partNumber', show: true },
        { key: 'peruntukan', show: true },
        { key: 'ramaining', show: true },
        { key: 'sn', show: true },
        { key: 'toDue', show: true },
        { key: 'typeDue', show: true },
        { key: 'typeOfwork', show: true },
        { key: 'variabel', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('dueListOutput_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('dueListOutput_columns');
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
                console.warn('Gagal parse dueListOutput dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('due-list-output', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<DueListOutputShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: DueListOutputShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsDueListOutputDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<DueListOutputShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: DueListOutputShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idDueListOutput: data.idDueListOutput
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