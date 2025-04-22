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
import { DueListReportService, DueListService, MaintenanceService } from 'de-sdk-core/services';
import { AmimsDueListDto } from 'de-sdk-core/models';
import { DueListShareAddComponent } from '../due-list-share-add/due-list-share-add.component';
import { DueListShareDetailComponent } from '../due-list-share-detail/due-list-share-detail.component';
import { AircraftService } from 'de-sdk-core/services';
import { PartService } from 'de-sdk-core/services';
import { TypeOfworkService } from 'de-sdk-core/services';



@Component({
    selector: 'app-due-list-share-list',
    templateUrl: './due-list-share-list.component.html',
    styleUrl: './due-list-share-list.component.scss'
})
export class DueListShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idAircraft') idAircraft: string | null = null;

    @Input('idMantenance') idMantenance: string | null = null;

    @Input('idPart') idPart: string | null = null;

    @Input('idTypeOfwork') idTypeOfwork: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private dueListReportService: DueListReportService,
        private dueListService: DueListService,
        private tokenService: TokenService,

        private aircraftService: AircraftService,
        private mantenanceService: MaintenanceService,
        private partService: PartService,
        private typeOfworkService: TypeOfworkService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_dueList = this.status == 'semua' ? null : this.status;



        if (changes.idAircraft) {
            this.filterAircraft.idAircraft = this.idAircraft
        }


        if (changes.idMantenance) {
            this.filterMantenance.idMantenance = this.idMantenance
        }


        if (changes.idPart) {
            this.filterPart.idPart = this.idPart
        }


        if (changes.idTypeOfwork) {
            this.filterTypeOfwork.idTypeOfwork = this.idTypeOfwork
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllAircraft();
        this.getAllMantenance();
        this.getAllPart();
        this.getAllTypeOfwork();
    }


    listAircraft: any[] = [];

    listMantenance: any[] = [];

    listPart: any[] = [];

    listTypeOfwork: any[] = [];

    //untuak filter dari prent

    filterAircraft: any = {}

    filterMantenance: any = {}

    filterPart: any = {}

    filterTypeOfwork: any = {}


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllMantenance() {
        this.mantenanceService.maintenanceControllerFindAll().subscribe(
            data => this.listMantenance = data.data ?? []
        );
    }
    getAllPart() {
        this.partService.partControllerFindAll().subscribe(
            data => this.listPart = data.data ?? []
        );
    }
    getAllTypeOfwork() {
        this.typeOfworkService.typeOfworkControllerFindAll().subscribe(
            data => this.listTypeOfwork = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        currentCycleMin: null,
        currentCycleMax: null,
        currentHoursMin: null,
        currentHoursMax: null,
        cycleFromMin: null,
        cycleFromMax: null,
        cycleToMin: null,
        cycleToMax: null,
        dateDueRange: null,
        dueAcCycleMin: null,
        dueAcCycleMax: null,
        dueAcHoursMin: null,
        dueAcHoursMax: null,
        dueCycleMin: null,
        dueCycleMax: null,
        dueDateRange: null,
        dueHoursMin: null,
        dueHoursMax: null,
        hoursFromMin: null,
        hoursFromMax: null,
        hoursToMin: null,
        hoursToMax: null,
        idAircraft: null,
        idMantenance: null,
        idPart: null,
        idTypeOfwork: null,
        lastCycleMin: null,
        lastCycleMax: null,
        lastDateRange: null,
        lastHoursMin: null,
        lastHoursMax: null,
        onSiteMin: null,
        onSiteMax: null,
        parentCycleMin: null,
        parentCycleMax: null,
        parentHoursMin: null,
        parentHoursMax: null,
        parentTimeMin: null,
        parentTimeMax: null,
        remainingCycleMin: null,
        remainingCycleMax: null,
        remainingHoursMin: null,
        remainingHoursMax: null,
        timeFromMin: null,
        timeFromMax: null,
        timeToMin: null,
        timeToMax: null
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
    search_field: string[] = ["dueDate", "lastDate", "noteDue", "parentAss", "remainingDay", "sn", "timeUnit", "typeDue", "typeOfwork"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            currentCycleMin: null,
            currentCycleMax: null,
            currentHoursMin: null,
            currentHoursMax: null,
            cycleFromMin: null,
            cycleFromMax: null,
            cycleToMin: null,
            cycleToMax: null,
            dateDueRange: null,
            dueAcCycleMin: null,
            dueAcCycleMax: null,
            dueAcHoursMin: null,
            dueAcHoursMax: null,
            dueCycleMin: null,
            dueCycleMax: null,
            dueDateRange: null,
            dueHoursMin: null,
            dueHoursMax: null,
            hoursFromMin: null,
            hoursFromMax: null,
            hoursToMin: null,
            hoursToMax: null,
            idAircraft: null,
            idMantenance: null,
            idPart: null,
            idTypeOfwork: null,
            lastCycleMin: null,
            lastCycleMax: null,
            lastDateRange: null,
            lastHoursMin: null,
            lastHoursMax: null,
            onSiteMin: null,
            onSiteMax: null,
            parentCycleMin: null,
            parentCycleMax: null,
            parentHoursMin: null,
            parentHoursMax: null,
            parentTimeMin: null,
            parentTimeMax: null,
            remainingCycleMin: null,
            remainingCycleMax: null,
            remainingHoursMin: null,
            remainingHoursMax: null,
            timeFromMin: null,
            timeFromMax: null,
            timeToMin: null,
            timeToMax: null
        };
        this.filter.status_dueList = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_due_list`] = { isNotNull: 'aktif' };

        this.dueListReportService.dueListReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "aircraft": this.filterAircraft, type: 'inner'
                    },
                    {
                        "mantenance": this.filterMantenance, type: 'inner'
                    },
                    {
                        "part": this.filterPart, type: 'inner'
                    },
                    {
                        "type_ofwork": this.filterTypeOfwork, type: 'inner'
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
                        "name": "mantenance",
                        "type": "single"
                    },
                    {
                        "name": "part",
                        "type": "single"
                    },
                    {
                        "name": "type_ofwork",
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
        { key: 'currentCycle', show: true },
        { key: 'currentHours', show: true },
        { key: 'cycleFrom', show: true },
        { key: 'cycleTo', show: true },
        { key: 'dateDue', show: true },
        { key: 'dueAcCycle', show: true },
        { key: 'dueAcHours', show: true },
        { key: 'dueCycle', show: true },
        { key: 'dueDate', show: true },
        { key: 'dueHours', show: true },
        { key: 'hoursFrom', show: true },
        { key: 'hoursTo', show: true },
        { key: 'lastCycle', show: true },
        { key: 'lastDate', show: true },
        { key: 'lastHours', show: true },
        { key: 'noteDue', show: true },
        { key: 'onSite', show: true },
        { key: 'parentAss', show: true },
        { key: 'parentCycle', show: true },
        { key: 'parentHours', show: true },
        { key: 'parentTime', show: true },
        { key: 'remainingCycle', show: true },
        { key: 'remainingDay', show: true },
        { key: 'remainingHours', show: true },
        { key: 'sn', show: true },
        { key: 'timeFrom', show: true },
        { key: 'timeTo', show: true },
        { key: 'timeUnit', show: true },
        { key: 'typeDue', show: true },
        { key: 'typeOfwork', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('dueList_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('dueList_columns');
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
                console.warn('Gagal parse dueList dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('due-list', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<DueListShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: DueListShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsDueListDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<DueListShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: DueListShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idDueList: data.idDueList
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