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
import { TechLogItemReportService, TechLogItemService, UsersService } from 'de-sdk-core';
import { AmimsTechLogItemDto } from 'de-sdk-core';
import { TechLogItemShareAddComponent } from '../tech-log-item-share-add/tech-log-item-share-add.component';
import { TechLogItemShareDetailComponent } from '../tech-log-item-share-detail/tech-log-item-share-detail.component';
import { TechLogService } from 'de-sdk-core';



@Component({
    selector: 'app-tech-log-item-share-list',
    templateUrl: './tech-log-item-share-list.component.html',
    styleUrl: './tech-log-item-share-list.component.scss'
})
export class TechLogItemShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idCaptain') idCaptain: string | null = null;

    @Input('idTechLog') idTechLog: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private techLogItemReportService: TechLogItemReportService,
        private techLogItemService: TechLogItemService,
        private tokenService: TokenService,

        private usersService: UsersService,
        private techLogService: TechLogService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_techLogItem = this.status == 'semua' ? null : this.status;



        if (changes.idCaptain) {
            this.filterCaptain.idCaptain = this.idCaptain
        }


        if (changes.idTechLog) {
            this.filterTechLog.idTechLog = this.idTechLog
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllCaptain();
        this.getAllTechLog();
    }


    listCaptain: any[] = [];

    listTechLog: any[] = [];

    //untuak filter dari prent

    filterCaptain: any = {}

    filterTechLog: any = {}


    // untuk fungsi get ALL relation
    getAllCaptain() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listCaptain = data.data ?? []
        );
    }
    getAllTechLog() {
        this.techLogService.techLogControllerFindAll().subscribe(
            data => this.listTechLog = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        apuStartMin: null,
        apuStartMax: null,
        cyclesMin: null,
        cyclesMax: null,
        flightHoursMin: null,
        flightHoursMax: null,
        hoistUsageMin: null,
        hoistUsageMax: null,
        idCaptain: null,
        idTechLog: null,
        landingsMin: null,
        landingsMax: null,
        slingReleasedMin: null,
        slingReleasedMax: null
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
    search_field: string[] = ["cgPenalty", "cocaCaptain", "flightFrom", "flightTo", "hoistOperation", "landingTime", "noteTechLogItem", "takeofTime"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            apuStartMin: null,
            apuStartMax: null,
            cyclesMin: null,
            cyclesMax: null,
            flightHoursMin: null,
            flightHoursMax: null,
            hoistUsageMin: null,
            hoistUsageMax: null,
            idCaptain: null,
            idTechLog: null,
            landingsMin: null,
            landingsMax: null,
            slingReleasedMin: null,
            slingReleasedMax: null
        };
        this.filter.status_techLogItem = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_tech_log_item`] = { isNotNull: 'aktif' };

        this.techLogItemReportService.techLogItemReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "captain": this.filterCaptain, type: 'inner'
                    },
                    {
                        "tech_log": this.filterTechLog, type: 'inner'
                    }
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "captain",
                        "type": "single"
                    },
                    {
                        "name": "tech_log",
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
        { key: 'apuStart', show: true },
        { key: 'cgPenalty', show: true },
        { key: 'cocaCaptain', show: true },
        { key: 'cycles', show: true },
        { key: 'flightFrom', show: true },
        { key: 'flightHours', show: true },
        { key: 'flightTo', show: true },
        { key: 'hoistOperation', show: true },
        { key: 'hoistUsage', show: true },
        { key: 'landingTime', show: true },
        { key: 'landings', show: true },
        { key: 'noteTechLogItem', show: true },
        { key: 'slingReleased', show: true },
        { key: 'takeofTime', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('techLogItem_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('techLogItem_columns');
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
                console.warn('Gagal parse techLogItem dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('tech-log-item', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<TechLogItemShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: TechLogItemShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsTechLogItemDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<TechLogItemShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: TechLogItemShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idTechLogItem: data.idTechLogItem
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