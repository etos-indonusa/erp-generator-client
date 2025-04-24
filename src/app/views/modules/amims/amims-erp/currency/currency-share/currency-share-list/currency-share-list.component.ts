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
import { CurrencyReportService, CurrencyService } from 'de-sdk-core';
import { AmimsCurrencyDto } from 'de-sdk-core';
import { CurrencyShareAddComponent } from '../currency-share-add/currency-share-add.component';
import { CurrencyShareDetailComponent } from '../currency-share-detail/currency-share-detail.component';
import { McurrencyService } from 'de-sdk-core';
import { UserService } from 'de-sdk-core';
 


@Component({
    selector: 'app-currency-share-list',
    templateUrl: './currency-share-list.component.html',
    styleUrl: './currency-share-list.component.scss'
})
export class CurrencyShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idMcurrency') idMcurrency: string | null  = null;
     
    @Input('idUser') idUser: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private cd: ChangeDetectorRef,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private currencyReportService: CurrencyReportService,
        private currencyService: CurrencyService,
        private tokenService: TokenService,

                        private mcurrencyService: McurrencyService,
                private userService: UserService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_currency = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idMcurrency)
            {
                this.filterMcurrency.idMcurrency = this.idMcurrency
            }
            
           
            if (changes.idUser)
            {
                this.filterUser.idUser = this.idUser
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllMcurrency();
                    this.getAllUser();
                    }

    
    listMcurrency: any[] = []; 
    
    listUser: any[] = []; 
    
    //untuak filter dari prent
    
    filterMcurrency:any = {} 
    
    filterUser:any = {} 
    

    // untuk fungsi get ALL relation
            getAllMcurrency() {
    this.mcurrencyService.mcurrencyControllerFindAll().subscribe(
      data => this.listMcurrency = data.data ?? []
    );
  }
        getAllUser() {
    this.userService.userControllerFindAll().subscribe(
      data => this.listUser = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    effectiveDateRange: null,
  idMcurrency: null,
  idUser: null,
  newValueMin: null,
  newValueMax: null,
  oldValueMin: null,
  oldValueMax: null
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
    search_field: string[] = ["effectiveDate","forcurrency","noteCurrency"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            effectiveDateRange: null,
  idMcurrency: null,
  idUser: null,
  newValueMin: null,
  newValueMax: null,
  oldValueMin: null,
  oldValueMax: null
        };
        this.filter.status_currency = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_currency`] = { isNotNull: 'aktif' };

        this.currencyReportService.currencyReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "mcurrency": this.filterMcurrency, type: 'inner'
                    },
                                        {
                        "user": this.filterUser, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "mcurrency",
    "type": "single"
  },
  {
    "name": "user",
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
         { key: 'createdAt',  show: true },
              { key: 'effectiveDate',  show: true },
              { key: 'forcurrency',  show: true },
              { key: 'newValue',  show: true },
              { key: 'noteCurrency',  show: true },
              { key: 'oldValue',  show: true },
              { key: 'updatedAt',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('currency_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('currency_columns');
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
                console.warn('Gagal parse currency dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('currency', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<CurrencyShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: CurrencyShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsCurrencyDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<CurrencyShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: CurrencyShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idCurrency:data.idCurrency
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

    update(data: any) {}
    delete(id: string) {} 

    print() {
        let url = environment.srv_document + '/pdfAkutansi/vouchers?filter=' + JSON.stringify(this.filter) + '&token=' + this.tokenService.getToken();
        window.open(url, '_blank');
    }
}