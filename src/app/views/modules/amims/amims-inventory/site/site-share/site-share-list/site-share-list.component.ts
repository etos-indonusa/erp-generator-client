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
import { SiteReportService, SiteService } from 'de-sdk-core';
import { AmimsSiteDto } from 'de-sdk-core';
import { SiteShareAddComponent } from '../site-share-add/site-share-add.component';
import { SiteShareDetailComponent } from '../site-share-detail/site-share-detail.component';



@Component({
    selector: 'app-site-share-list',
    templateUrl: './site-share-list.component.html',
    styleUrl: './site-share-list.component.scss'
})
export class SiteShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idNewSite') idNewSite: string | null = null;

    @Input('idUser') idUser: string | null = null;


    constructor(
        private pesanService: PesanService,
        private cd: ChangeDetectorRef,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private siteReportService: SiteReportService,
        private siteService: SiteService,
        private tokenService: TokenService,

        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_site = this.status == 'semua' ? null : this.status;



        if (changes.idNewSite) {
            this.filterNewSite.idNewSite = this.idNewSite
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

    }


    listNewSite: any[] = [];

    listUser: any[] = [];

    //untuak filter dari prent

    filterNewSite: any = {}

    filterUser: any = {}



    currentUser: any = {};
    filter: any = {
        idNewSite: null,
        idUser: null,
        isDeleted: null,
        isMain: null,
        isStore: null,
        parentSiteMin: null,
        parentSiteMax: null,
        statusSiteMin: null,
        statusSiteMax: null,
        validationMin: null,
        validationMax: null
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
    search_field: string[] = ["address", "city", "codeSite", "contactname", "country", "emailaddress", "fax", "isStore", "logoSite", "mobile", "oldId", "site", "telephone", "typeSite"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idNewSite: null,
            idUser: null,
            isDeleted: null,
            isMain: null,
            isStore: null,
            parentSiteMin: null,
            parentSiteMax: null,
            statusSiteMin: null,
            statusSiteMax: null,
            validationMin: null,
            validationMax: null
        };
        this.filter.status_site = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_site`] = { isNotNull: 'aktif' };

        this.siteReportService.siteReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [

                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [

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
        { key: 'address', show: true },
        { key: 'city', show: true },
        { key: 'codeSite', show: true },
        { key: 'contactname', show: true },
        { key: 'country', show: false },
        { key: 'createdAt', show: false },
        { key: 'emailaddress', show: false },
        { key: 'fax', show: false },
        { key: 'isDeleted', show: false },
        { key: 'isMain', show: false },
        { key: 'isStore', show: true },
        { key: 'logoSite', show: false },
        { key: 'mobile', show: false },
        { key: 'oldId', show: false },
        { key: 'parentSite', show: false },
        { key: 'site', show: true },
        { key: 'statusSite', show: true },
        { key: 'telephone', show: false },
        { key: 'typeSite', show: false },
        { key: 'updatedAt', show: false },
        { key: 'validation', show: false },

    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('site_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('site_columns');
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
                console.warn('Gagal parse site dari localStorage', e);
            }
        }
    }
    // TABLE DINAMIS 


    add() {
        if (!this.acl.can('site', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<SiteShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: SiteShareAddComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: AmimsSiteDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<SiteShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: SiteShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idSite: data.idSite
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

    update(data: any) {
        if (!this.acl.can('contract-site', 'can_edit')) return;

        const drawerRef = this.drawerService.create<SiteShareAddComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: SiteShareAddComponent,
            nzWidth: (500) + 'px',
            nzContentParams: {
                site: data
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