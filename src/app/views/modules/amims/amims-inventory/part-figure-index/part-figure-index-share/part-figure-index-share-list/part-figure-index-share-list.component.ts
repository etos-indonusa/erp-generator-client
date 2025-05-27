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
import { PartFigureIndexReportService, PartFigureIndexService } from 'de-sdk-core';
import { AmimsPartFigureIndexDto } from 'de-sdk-core';
import { PartFigureIndexShareAddComponent } from '../part-figure-index-share-add/part-figure-index-share-add.component';
import { PartFigureIndexShareDetailComponent } from '../part-figure-index-share-detail/part-figure-index-share-detail.component';
import { AtaService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';



@Component({
    selector: 'app-part-figure-index-share-list',
    templateUrl: './part-figure-index-share-list.component.html',
    styleUrl: './part-figure-index-share-list.component.scss'
})
export class PartFigureIndexShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idAta') idAta: string | null = null;

    @Input('idMpart') idMpart: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private partFigureIndexReportService: PartFigureIndexReportService,
        private partFigureIndexService: PartFigureIndexService,
        private tokenService: TokenService,
        private cd: ChangeDetectorRef,
        private ataService: AtaService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_partFigureIndex = this.status == 'semua' ? null : this.status;



        if (changes.idAta) {
            this.filterAta.idAta = this.idAta
        }


        if (changes.idMpart) {
            this.filterMpart.idMpart = this.idMpart
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

        this.getAllAta(); 
    }


    listAta: any[] = [];

    listMpart: any[] = [];

    //untuak filter dari prent

    filterAta: any = {}

    filterMpart: any = {}


    // untuk fungsi get ALL relation
    getAllAta() {
        this.ataService.ataControllerFindAll().subscribe(
            data => this.listAta = data.data ?? []
        );
    }
    

    currentUser: any = {};
    filter: any = {
        idAta: null,
        idMpart: null
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
    search_field: string[] = ["figureIndex", "itemIndex"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idAta: null,
            idMpart: null
        };
        this.filter.status_partFigureIndex = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_part_figure_index`] = { isNotNull: 'aktif' };

        this.partFigureIndexReportService.partFigureIndexReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "ata": this.filterAta, type: 'inner'
                    } 
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "ata",
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
        { key: 'createdAt', show: true },
        { key: 'figureIndex', show: true },
        { key: 'itemIndex', show: true },
        { key: 'updatedAt', show: true },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('partFigureIndex_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('partFigureIndex_columns');
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
                console.warn('Gagal parse partFigureIndex dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('part-figure-index', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<PartFigureIndexShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: PartFigureIndexShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsPartFigureIndexDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<PartFigureIndexShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: PartFigureIndexShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idPartFigureIndex: data.idPartFigureIndex
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