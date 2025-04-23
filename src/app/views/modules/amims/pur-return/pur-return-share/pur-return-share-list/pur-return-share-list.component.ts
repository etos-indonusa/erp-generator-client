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
import { PurReturnReportService, PurReturnService } from 'de-sdk-core/lib/services';
import { AmimsPurReturnDto } from 'de-sdk-core/lib/models';
import { PurReturnShareAddComponent } from '../pur-return-share-add/pur-return-share-add.component';
import { PurReturnShareDetailComponent } from '../pur-return-share-detail/pur-return-share-detail.component';
import { PurPoService } from 'de-sdk-core/lib/services';
import { PurVendorService } from 'de-sdk-core/lib/services';
import { UsersService } from 'de-sdk-core/lib/services';
 


@Component({
    selector: 'app-pur-return-share-list',
    templateUrl: './pur-return-share-list.component.html',
    styleUrl: './pur-return-share-list.component.scss'
})
export class PurReturnShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idPurPo') idPurPo: string | null  = null;
     
    @Input('idPurVendor') idPurVendor: string | null  = null;
     
    @Input('idUser') idUser: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private purReturnReportService: PurReturnReportService,
        private purReturnService: PurReturnService,
        private tokenService: TokenService,

                        private purPoService: PurPoService,
                private purVendorService: PurVendorService,
                private usersService: UsersService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_purReturn = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idPurPo)
            {
                this.filterPurPo.idPurPo = this.idPurPo
            }
            
           
            if (changes.idPurVendor)
            {
                this.filterPurVendor.idPurVendor = this.idPurVendor
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

                            this.getAllPurPo();
                    this.getAllPurVendor();
                    this.getAllUser();
                    }

    
    listPurPo: any[] = []; 
    
    listPurVendor: any[] = []; 
    
    listUser: any[] = []; 
    
    //untuak filter dari prent
    
    filterPurPo:any = {} 
    
    filterPurVendor:any = {} 
    
    filterUser:any = {} 
    

    // untuk fungsi get ALL relation
            getAllPurPo() {
    this.purPoService.purPoControllerFindAll().subscribe(
      data => this.listPurPo = data.data ?? []
    );
  }
        getAllPurVendor() {
    this.purVendorService.purVendorControllerFindAll().subscribe(
      data => this.listPurVendor = data.data ?? []
    );
  }
        getAllUser() {
    this.usersService.usersControllerFindAll().subscribe(
      data => this.listUser = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    dateDeadlineReturnRange: null,
  dateReturnRange: null,
  idPurPo: null,
  idPurVendor: null,
  idUser: null,
  isDeleted: null,
  validasiMin: null,
  validasiMax: null
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
    search_field: string[] = ["noteReturn","numberReturn"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateDeadlineReturnRange: null,
  dateReturnRange: null,
  idPurPo: null,
  idPurVendor: null,
  idUser: null,
  isDeleted: null,
  validasiMin: null,
  validasiMax: null
        };
        this.filter.status_purReturn = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_pur_return`] = { isNotNull: 'aktif' };

        this.purReturnReportService.purReturnReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "pur_po": this.filterPurPo, type: 'inner'
                    },
                                        {
                        "pur_vendor": this.filterPurVendor, type: 'inner'
                    },
                                        {
                        "user": this.filterUser, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "pur_po",
    "type": "single"
  },
  {
    "name": "pur_vendor",
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
              { key: 'dateDeadlineReturn',  show: true },
              { key: 'dateReturn',  show: true },
              { key: 'isDeleted',  show: true },
              { key: 'noteReturn',  show: true },
              { key: 'numberReturn',  show: true },
              { key: 'statusReturn',  show: true },
              { key: 'updatedAt',  show: true },
              { key: 'validasi',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('purReturn_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('purReturn_columns');
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
                console.warn('Gagal parse purReturn dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('pur-return', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<PurReturnShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: PurReturnShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsPurReturnDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<PurReturnShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: PurReturnShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idPurReturn:data.idPurReturn
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