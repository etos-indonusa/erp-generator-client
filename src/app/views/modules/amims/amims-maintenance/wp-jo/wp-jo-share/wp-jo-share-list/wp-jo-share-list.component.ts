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
import { WpJoReportService, WpJoService } from 'de-sdk-core';
import { AmimsWpJoDto } from 'de-sdk-core';
import { WpJoShareAddComponent } from '../wp-jo-share-add/wp-jo-share-add.component';
import { WpJoShareDetailComponent } from '../wp-jo-share-detail/wp-jo-share-detail.component';
import { AircraftService } from 'de-sdk-core';
import { DueListOutputService } from 'de-sdk-core';
import { MaintenanceService } from 'de-sdk-core';
import { MaintenanceCodeService } from 'de-sdk-core';
import { MaintenanceProgramService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { SiteService } from 'de-sdk-core';
import { TechLogService } from 'de-sdk-core';
import { WpService } from 'de-sdk-core';



@Component({
    selector: 'app-wp-jo-share-list',
    templateUrl: './wp-jo-share-list.component.html',
    styleUrl: './wp-jo-share-list.component.scss'
})
export class WpJoShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = false;
    //untuak filter dari prent

    @Input('idAircraft') idAircraft: string | null = null;

    @Input('idDueListOutput') idDueListOutput: string | null = null;

    @Input('idMaintenance') idMaintenance: string | null = null;

    @Input('idMaintenanceCode') idMaintenanceCode: string | null = null;

    @Input('idMaintenanceProgram') idMaintenanceProgram: string | null = null;

    @Input('idMpart') idMpart: string | null = null;

    @Input('idPart') idPart: string | null = null;

    @Input('idSite') idSite: string | null = null;

    @Input('idTechLog') idTechLog: string | null = null;

    @Input('idUser') idUser: string | null = null;

    @Input('idWp') idWp: string | null = null;


    constructor(
        private pesanService: PesanService,
        private cd: ChangeDetectorRef,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private wpJoReportService: WpJoReportService,
        private wpJoService: WpJoService,
        private tokenService: TokenService,

        private aircraftService: AircraftService,
        private dueListOutputService: DueListOutputService,
        private maintenanceService: MaintenanceService,
        private maintenanceCodeService: MaintenanceCodeService,
        private maintenanceProgramService: MaintenanceProgramService,
        private mpartService: MpartService,
        private partService: PartService,
        private siteService: SiteService,
        private techLogService: TechLogService,
        private wpService: WpService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_wpJo = this.status == 'semua' ? null : this.status;



        if (changes.idAircraft) {
            this.filterAircraft.idAircraft = this.idAircraft
        }


        if (changes.idDueListOutput) {
            this.filterDueListOutput.idDueListOutput = this.idDueListOutput
        }


        if (changes.idMaintenance) {
            this.filterMaintenance.idMaintenance = this.idMaintenance
        }


        if (changes.idMaintenanceCode) {
            this.filterMaintenanceCode.idMaintenanceCode = this.idMaintenanceCode
        }


        if (changes.idMaintenanceProgram) {
            this.filterMaintenanceProgram.idMaintenanceProgram = this.idMaintenanceProgram
        }


        if (changes.idMpart) {
            this.filterMpart.idMpart = this.idMpart
        }


        if (changes.idPart) {
            this.filterPart.idPart = this.idPart
        }


        if (changes.idSite) {
            this.filterSite.idSite = this.idSite
        }


        if (changes.idTechLog) {
            this.filterTechLog.idTechLog = this.idTechLog
        }


        if (changes.idUser) {
            this.filterUser.idUser = this.idUser
        }


        if (changes.idWp) {
            this.filterWp.idWp = this.idWp
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllAircraft();
        this.getAllMaintenanceCode();
        this.getAllMaintenanceProgram();
        this.getAllSite();
        this.getAllWp();
    }


    listAircraft: any[] = [];

    listDueListOutput: any[] = [];

    listMaintenance: any[] = [];

    listMaintenanceCode: any[] = [];

    listMaintenanceProgram: any[] = [];

    listMpart: any[] = [];

    listPart: any[] = [];

    listSite: any[] = [];

    listTechLog: any[] = [];

    listUser: any[] = [];

    listWp: any[] = [];

    //untuak filter dari prent

    filterAircraft: any = {}

    filterDueListOutput: any = {}

    filterMaintenance: any = {}

    filterMaintenanceCode: any = {}

    filterMaintenanceProgram: any = {}

    filterMpart: any = {}

    filterPart: any = {}

    filterSite: any = {}

    filterTechLog: any = {}

    filterUser: any = {}

    filterWp: any = {}


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }


    getAllMaintenanceCode() {
        this.maintenanceCodeService.maintenanceCodeControllerFindAll().subscribe(
            data => this.listMaintenanceCode = data.data ?? []
        );
    }
    getAllMaintenanceProgram() {
        this.maintenanceProgramService.maintenanceProgramControllerFindAll().subscribe(
            data => this.listMaintenanceProgram = data.data ?? []
        );
    }


    getAllSite() {
        this.siteService.siteControllerFindAll().subscribe(
            data => this.listSite = data.data ?? []
        );
    }


    getAllWp() {
        this.wpService.wpControllerFindAll().subscribe(
            data => this.listWp = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        carriedOutDateRange: null,
        compliteCycleMin: null,
        compliteCycleMax: null,
        compliteDateRange: null,
        compliteHoursMin: null,
        compliteHoursMax: null,
        cycleFromMin: null,
        cycleFromMax: null,
        cycleToMin: null,
        cycleToMax: null,
        dateJoRange: null,
        enginerApprovedDateRange: null,
        enginerApprovedNoteMin: null,
        enginerApprovedNoteMax: null,
        hourseFromMin: null,
        hourseFromMax: null,
        hourseToMin: null,
        hourseToMax: null,
        idAircraft: null,
        idDueListOutput: null,
        idMaintenance: null,
        idMaintenanceCode: null,
        idMaintenanceProgram: null,
        idMpart: null,
        idPart: null,
        idSite: null,
        idTechLog: null,
        idUser: null,
        idWp: null,
        timeRangeFromMin: null,
        timeRangeFromMax: null,
        timeRangeToMin: null,
        timeRangeToMax: null,
        totalHoursWorkMin: null,
        totalHoursWorkMax: null
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
    search_field: string[] = ["carriedOutDate", "completedAt", "compliteDate", "enginerApprovedBy", "enginerApprovedDate", "formNo", "inspectorApprovedAt", "inspectorApprovedBy", "inspectorApprovedNote", "noteJo", "numberJo", "parentEquipmentType", "priority", "reference", "typeOfwork", "workDue"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'desc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            carriedOutDateRange: null,
            compliteCycleMin: null,
            compliteCycleMax: null,
            compliteDateRange: null,
            compliteHoursMin: null,
            compliteHoursMax: null,
            cycleFromMin: null,
            cycleFromMax: null,
            cycleToMin: null,
            cycleToMax: null,
            dateJoRange: null,
            enginerApprovedDateRange: null,
            enginerApprovedNoteMin: null,
            enginerApprovedNoteMax: null,
            hourseFromMin: null,
            hourseFromMax: null,
            hourseToMin: null,
            hourseToMax: null,
            idAircraft: null,
            idDueListOutput: null,
            idMaintenance: null,
            idMaintenanceCode: null,
            idMaintenanceProgram: null,
            idMpart: null,
            idPart: null,
            idSite: null,
            idTechLog: null,
            idUser: null,
            idWp: null,
            timeRangeFromMin: null,
            timeRangeFromMax: null,
            timeRangeToMin: null,
            timeRangeToMax: null,
            totalHoursWorkMin: null,
            totalHoursWorkMax: null
        };
        this.filter.status_wpJo = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_wp_jo`] = { isNotNull: 'aktif' };

        this.wpJoReportService.wpJoReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "aircraft": this.filterAircraft, type: 'inner'
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
                        "name": "maintenance",
                        "type": "single"
                    },
                    {
                        "name": "maintenance_code",
                        "type": "single"
                    },

                    {
                        "name": "mpart",
                        "type": "single"
                    },
                    {
                        "name": "part",
                        "type": "single"
                    },
                    {
                        "name": "site",
                        "type": "single"
                    },
                    {
                        "name": "tech_log",
                        "type": "single"
                    },

                    {
                        "name": "wp",
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
            if (data.data && data.data.length > 0) {
                // this.detail(data.data[0]);
            }
        }, err => {
            this.loading = false;
        });
    }

    i=0;
    currentSort: any = {};
    onQueryParamsChange(params: NzTableQueryParams): void {
        this.pageIndex = params.pageIndex;
        this.pageSize = params.pageSize;
        this.currentSort = params.sort.find(item => item.value !== null);
        this.sortKey = (this.currentSort && this.currentSort.key) || 'created_at';
        this.sortValue = (this.currentSort && this.currentSort.value) || 'desc';
        if (this.i > 0) {
            this.searchData();
        }
        this.i++;
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
        { key: 'carriedOutDate', show: true },
        { key: 'completedAt', show: true },
        { key: 'compliteCycle', show: true },
        { key: 'compliteDate', show: true },
        { key: 'compliteHours', show: true },
        { key: 'createdAt', show: true },
        { key: 'cycleFrom', show: true },
        { key: 'cycleTo', show: true },
        { key: 'dateJo', show: true },
        { key: 'enginerApprovedBy', show: true },
        { key: 'enginerApprovedDate', show: true },
        { key: 'enginerApprovedNote', show: true },
        { key: 'formNo', show: true },
        { key: 'hourseFrom', show: true },
        { key: 'hourseTo', show: true },
        { key: 'inspectorApprovedAt', show: true },
        { key: 'inspectorApprovedBy', show: true },
        { key: 'inspectorApprovedNote', show: true },
        { key: 'noteJo', show: true },
        { key: 'numberJo', show: true },
        { key: 'parentEquipmentType', show: true },
        { key: 'priority', show: true },
        { key: 'reference', show: true },
        { key: 'statusWpJo', show: true },
        { key: 'timeRangeFrom', show: true },
        { key: 'timeRangeTo', show: true },
        { key: 'totalHoursWork', show: true },
        { key: 'typeOfwork', show: true },
        { key: 'updatedAt', show: true },
        { key: 'workDue', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('wpJo_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('wpJo_columns');
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
                console.warn('Gagal parse wpJo dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('wp-jo', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<WpJoShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: WpJoShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsWpJoDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<WpJoShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: WpJoShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idWpJo: data.idWpJo
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

    update(data: any) {
        if (!this.acl.can('contract-site', 'can_edit')) return;

        const drawerRef = this.drawerService.create<WpJoShareAddComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: WpJoShareAddComponent,
            nzWidth: (500) + 'px',
            nzContentParams: {
                wpJo: data
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