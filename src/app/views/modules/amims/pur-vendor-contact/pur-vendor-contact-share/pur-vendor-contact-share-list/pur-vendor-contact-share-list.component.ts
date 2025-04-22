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
import { PurVendorContactReportService, PurVendorContactService } from 'de-sdk-core/services';
import { AmimsPurVendorContactDto } from 'de-sdk-core/models';
import { PurVendorContactShareAddComponent } from '../pur-vendor-contact-share-add/pur-vendor-contact-share-add.component';
import { PurVendorContactShareDetailComponent } from '../pur-vendor-contact-share-detail/pur-vendor-contact-share-detail.component';
import { PurVendorService } from 'de-sdk-core/services';
 


@Component({
    selector: 'app-pur-vendor-contact-share-list',
    templateUrl: './pur-vendor-contact-share-list.component.html',
    styleUrl: './pur-vendor-contact-share-list.component.scss'
})
export class PurVendorContactShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idPurVendor') idPurVendor: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private purVendorContactReportService: PurVendorContactReportService,
        private purVendorContactService: PurVendorContactService,
        private tokenService: TokenService,

                        private purVendorService: PurVendorService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_purVendorContact = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idPurVendor)
            {
                this.filterPurVendor.idPurVendor = this.idPurVendor
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllPurVendor();
                    }

    
    listPurVendor: any[] = []; 
    
    //untuak filter dari prent
    
    filterPurVendor:any = {} 
    

    // untuk fungsi get ALL relation
            getAllPurVendor() {
    this.purVendorService.purVendorControllerFindAll().subscribe(
      data => this.listPurVendor = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    idPurVendor: null
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
    search_field: string[] = ["address","city","country","email","fax","linePhone","oldId","phone","pic","postcode","state"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idPurVendor: null
        };
        this.filter.status_purVendorContact = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_pur_vendor_contact`] = { isNotNull: 'aktif' };

        this.purVendorContactReportService.purVendorContactReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "pur_vendor": this.filterPurVendor, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "pur_vendor",
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
         { key: 'address',  show: true },
              { key: 'city',  show: true },
              { key: 'country',  show: true },
              { key: 'createdAt',  show: true },
              { key: 'email',  show: true },
              { key: 'fax',  show: true },
              { key: 'linePhone',  show: true },
              { key: 'oldId',  show: true },
              { key: 'phone',  show: true },
              { key: 'pic',  show: true },
              { key: 'postcode',  show: true },
              { key: 'state',  show: true },
              { key: 'updatedAt',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('purVendorContact_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('purVendorContact_columns');
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
                console.warn('Gagal parse purVendorContact dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('pur-vendor-contact', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<PurVendorContactShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: PurVendorContactShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsPurVendorContactDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<PurVendorContactShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: PurVendorContactShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idPurVendorContact:data.idPurVendorContact
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