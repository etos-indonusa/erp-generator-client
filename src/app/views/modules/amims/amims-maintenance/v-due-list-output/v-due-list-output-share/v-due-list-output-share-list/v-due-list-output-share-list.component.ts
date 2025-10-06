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
import { AircraftService, AmimsDueListOutputDto, AmimsWpJoDto, AmimsWpJoReportDto, VDueListOutputReportService, VDueListOutputService } from 'de-sdk-core';
import { AmimsVDueListOutputDto } from 'de-sdk-core';
import { VDueListOutputShareAddComponent } from '../v-due-list-output-share-add/v-due-list-output-share-add.component';
import { VDueListOutputShareDetailComponent } from '../v-due-list-output-share-detail/v-due-list-output-share-detail.component';
import { DueListOutputService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { WpJoShareAddComponent } from '../../../wp-jo/wp-jo-share/wp-jo-share-add/wp-jo-share-add.component';



@Component({
    selector: 'app-v-due-list-output-share-list',
    templateUrl: './v-due-list-output-share-list.component.html',
    styleUrl: './v-due-list-output-share-list.component.scss'
})
export class VDueListOutputShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idDueListOutput') idDueListOutput: string | null = null;

    @Input('idMpart') idMpart: string | null = null;
    @Input('idAircraft') idAircraft: string | null = null;

    @Input('idPart') idPart: string | null = null;


    constructor(
        private pesanService: PesanService,
        private cd: ChangeDetectorRef,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private vDueListOutputReportService: VDueListOutputReportService,
        private vDueListOutputService: VDueListOutputService,
        private tokenService: TokenService,
        private aircraftService: AircraftService,
        private dueListOutputService: DueListOutputService,
        private mpartService: MpartService,
        private partService: PartService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_vDueListOutput = this.status == 'semua' ? null : this.status;



        if (changes.idDueListOutput) {
            this.filterDueListOutput.idDueListOutput = this.idDueListOutput
        }
        if (changes.idAircraft) {
            this.filterAircraft.idAircraft = this.idAircraft
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
    }


    listDueListOutput: any[] = [];

    listMpart: any[] = [];

    listPart: any[] = [];

    //untuak filter dari prent
    filterAircraft: any = {}
    filterDueListOutput: any = {}

    filterMpart: any = {}

    filterPart: any = {}
    listAircraft: any[] = [];

    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }


    currentUser: any = {};
    filter: any = {
        idDueListOutput: null,
        idMpart: null,
        idPart: null,
        lastPriceMin: null,
        lastPriceMax: null,
        partPriceMin: null,
        partPriceMax: null,
        remainingCyMin: null,
        remainingCyMax: null,
        remainingDyMin: null,
        remainingDyMax: null,
        remainingHrMin: null,
        remainingHrMax: null,
        toDueCyMin: null,
        toDueCyMax: null,
        toDueDyMin: null,
        toDueDyMax: null,
        toDueHrMin: null,
        toDueHrMax: null
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
    search_field: string[] = ["atInstallCy", "atInstallDy", "atInstallHr", "ata", "code", "dueAtCy", "dueAtDy", "dueAtHr", "keyword", "lastPriceCurrency", "noteDue", "partNumber", "sn"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'desc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idDueListOutput: null,
            idMpart: null,
            idPart: null,
            lastPriceMin: null,
            lastPriceMax: null,
            partPriceMin: null,
            partPriceMax: null,
            remainingCyMin: null,
            remainingCyMax: null,
            remainingDyMin: null,
            remainingDyMax: null,
            remainingHrMin: null,
            remainingHrMax: null,
            toDueCyMin: null,
            toDueCyMax: null,
            toDueDyMin: null,
            toDueDyMax: null,
            toDueHrMin: null,
            toDueHrMax: null
        };
        this.filter.status_vDueListOutput = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_v_due_list_output`] = { isNotNull: 'aktif' };

        this.vDueListOutputReportService.vDueListOutputReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "aircraft": this.filterAircraft, type: 'inner'
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
                        "name": "mpart",
                        "type": "single"
                    },
                    {
                        "name": "due_list",
                        "type": "single"
                    },
                    {
                        "name": "maintenance",
                        "to": "due_list",
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
            this.cd.detectChanges()
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
        { key: 'atInstallCy', show: true },
        { key: 'atInstallDy', show: true },
        { key: 'atInstallHr', show: true },
        { key: 'ata', show: true },
        { key: 'code', show: true },
        { key: 'createdAt', show: true },
        { key: 'dueAtCy', show: true },
        { key: 'dueAtDy', show: true },
        { key: 'dueAtHr', show: true },
        { key: 'keyword', show: true },
        { key: 'lastPrice', show: true },
        { key: 'lastPriceCurrency', show: true },
        { key: 'noteDue', show: true },
        { key: 'partNumber', show: true },
        { key: 'partPrice', show: true },
        { key: 'remainingCy', show: true },
        { key: 'remainingDy', show: true },
        { key: 'remainingHr', show: true },
        { key: 'sn', show: true },
        { key: 'toDueCy', show: true },
        { key: 'toDueDy', show: true },
        { key: 'toDueHr', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('vDueListOutput_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('vDueListOutput_columns');
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
                console.warn('Gagal parse vDueListOutput dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    // add(param: AmimsVDueListOutputDto) {
    add(param: any) {
        if (!this.acl.can('v-due-list-output', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<WpJoShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: WpJoShareAddComponent,
            nzContentParams: {
                idAircraft: param.idAircraft,
                idDueListOutput: param.idDueListOutput,
                idMaintenance: param.dueList?.idMaintenance || param.typeOfwork,
                idMaintenanceCode: param.dueList?.maintenance?.idMaintenanceCode || null,
                // idMaintenanceProgram: param.idMaintenanceProgram,
                idMpart: param.idMpart,
                idPart: param.idPart,
                idSite: null,
                idTechLog: null,
                idUser: this.currentUser?.idUser || null,
                idWp: null,
                workDue: param.noteDue,
                typeOfwork: param.typeOfwork,
                hourseTo: param.toDueHr,
                cycleTo: param.toDueCy,
                timeRangeTo: param.toDueDy,
                timeVariable: param.variabel
            },
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsVDueListOutputDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<VDueListOutputShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: VDueListOutputShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idDueListOutput: data.idDueListOutput
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

    update(data: any) {
        if (!this.acl.can('contract-site', 'can_edit')) return;

        const drawerRef = this.drawerService.create<VDueListOutputShareAddComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: VDueListOutputShareAddComponent,
            nzWidth: (500) + 'px',
            nzContentParams: {
                vDueListOutput: data
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