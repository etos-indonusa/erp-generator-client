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
import { UnscheduleMaintenanceReportService, UnscheduleMaintenanceService } from 'de-sdk-core';
import { AmimsUnscheduleMaintenanceDto } from 'de-sdk-core';
import { UnscheduleMaintenanceShareAddComponent } from '../unschedule-maintenance-share-add/unschedule-maintenance-share-add.component';
import { UnscheduleMaintenanceShareDetailComponent } from '../unschedule-maintenance-share-detail/unschedule-maintenance-share-detail.component';
import { AircraftService } from 'de-sdk-core';



@Component({
    selector: 'app-unschedule-maintenance-share-list',
    templateUrl: './unschedule-maintenance-share-list.component.html',
    styleUrl: './unschedule-maintenance-share-list.component.scss'
})
export class UnscheduleMaintenanceShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idAircraft') idAircraft: string | null = null;

    @Input('idUser') idUser: string | null = null;


    constructor(
        private pesanService: PesanService,
        private cd: ChangeDetectorRef,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private unscheduleMaintenanceReportService: UnscheduleMaintenanceReportService,
        private unscheduleMaintenanceService: UnscheduleMaintenanceService,
        private tokenService: TokenService,

        private aircraftService: AircraftService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_unscheduleMaintenance = this.status == 'semua' ? null : this.status;



        if (changes.idAircraft) {
            this.filterAircraft.idAircraft = this.idAircraft
        }


        if (changes.idUser) {
            this.filterUser.idUser = this.idUser
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllAircraft();

        // this.add(); // untuk testing
    }


    listAircraft: any[] = [];

    listUser: any[] = [];

    //untuak filter dari prent

    filterAircraft: any = {}

    filterUser: any = {}


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }


    currentUser: any = {};
    filter: any = {
        idAircraft: null,
        idUser: null,
        inspectionDateRange: null,
        isOptional: null,
        lastUpdatedByRange: null,
        nextDueDateRange: null,
        nextDueLandingsMin: null,
        nextDueLandingsMax: null,
        reportedDateRange: null,
        reportedLandingsMin: null,
        reportedLandingsMax: null
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
    search_field: string[] = ["abortStatus", "actionCode", "aircraftGrounded", "airframeSn", "amlNumber", "ataCode", "complianceLastPerformedBy", "delayStatus", "description", "discoveredBy", "discoveryPoint", "hiddenDamageRequired", "inspectionDate", "inspectionRequired", "inspector", "isOptional", "lastUpdatedBy", "nextDueDate", "nextDueHours", "nextDueParam", "notes", "preliminaryNote", "reference", "reportedDate", "reportedHours", "status", "type"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idAircraft: null,
            idUser: null,
            inspectionDateRange: null,
            isOptional: null,
            lastUpdatedByRange: null,
            nextDueDateRange: null,
            nextDueLandingsMin: null,
            nextDueLandingsMax: null,
            reportedDateRange: null,
            reportedLandingsMin: null,
            reportedLandingsMax: null
        };
        this.filter.status_unscheduleMaintenance = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_unschedule_maintenance`] = { isNotNull: 'aktif' };

        this.unscheduleMaintenanceReportService.unscheduleMaintenanceReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "aircraft": this.filterAircraft, type: 'inner'
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
                        "name": "part",
                        "type": "single"
                    },
                    {
                        "name": "mpart",
                        "to": "part",
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

            // this.detail(this.listOfData[0])
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
        { key: 'abortStatus', show: true },
        { key: 'actionCode', show: true },
        { key: 'aircraftGrounded', show: true },
        { key: 'airframeSn', show: true },
        { key: 'amlNumber', show: true },
        { key: 'ataCode', show: true },
        { key: 'complianceLastPerformedBy', show: true },
        { key: 'createdAt', show: true },
        { key: 'delayStatus', show: true },
        { key: 'description', show: true },
        { key: 'discoveredBy', show: true },
        { key: 'discoveryPoint', show: true },
        { key: 'hiddenDamageRequired', show: true },
        { key: 'inspectionDate', show: true },
        { key: 'inspectionRequired', show: true },
        { key: 'inspector', show: true },
        { key: 'isOptional', show: true },
        { key: 'lastUpdatedBy', show: true },
        { key: 'nextDueDate', show: true },
        { key: 'nextDueHours', show: true },
        { key: 'nextDueLandings', show: true },
        { key: 'nextDueParam', show: true },
        { key: 'notes', show: true },
        { key: 'preliminaryNote', show: true },
        { key: 'refNumber', show: true },
        { key: 'reference', show: true },
        { key: 'reportedDate', show: true },
        { key: 'reportedHours', show: true },
        { key: 'reportedLandings', show: true },
        { key: 'status', show: true },
        { key: 'type', show: true },
        { key: 'updatedAt', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('unscheduleMaintenance_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('unscheduleMaintenance_columns');
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
                console.warn('Gagal parse unscheduleMaintenance dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('unschedule-maintenance', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<UnscheduleMaintenanceShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: UnscheduleMaintenanceShareAddComponent,
            nzWidth:500 + 'px',
            // nzWidth: (window.innerWidth * 0.8) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsUnscheduleMaintenanceDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<UnscheduleMaintenanceShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: UnscheduleMaintenanceShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idUnscheduleMaintenance: data.idUnscheduleMaintenance
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

    update(data: any) {
        if (!this.acl.can('contract-site', 'can_edit')) return;

        const drawerRef = this.drawerService.create<UnscheduleMaintenanceShareAddComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: UnscheduleMaintenanceShareAddComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                unscheduleMaintenance: data
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }
    delete(id: string) { }

    print() {
        let url = environment.srv_document + '/pdfAkutansi/vouchers?filter=' + JSON.stringify(this.filter) + '&token=' + this.tokenService.getToken();
        window.open(url, '_blank');
    }
}