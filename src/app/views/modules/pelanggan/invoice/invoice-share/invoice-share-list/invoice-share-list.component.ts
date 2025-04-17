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
import { InvoiceReportService, InvoiceService } from 'src/sdk/core/services';
import { PelangganInvoiceDto } from 'src/sdk/core/models';
import { InvoiceShareAddComponent } from '../invoice-share-add/invoice-share-add.component';
import { InvoiceShareDetailComponent } from '../invoice-share-detail/invoice-share-detail.component';
import { ContractService } from 'src/sdk/core/services';
 


@Component({
    selector: 'app-invoice-share-list',
    templateUrl: './invoice-share-list.component.html',
    styleUrl: './invoice-share-list.component.scss'
})
export class InvoiceShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idContract') idContract: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private invoiceReportService: InvoiceReportService,
        private invoiceService: InvoiceService,
        private tokenService: TokenService,

                        private contractService: ContractService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_invoice = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idContract)
            {
                this.filterContract.idContract = this.idContract
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllContract();
                    }

    
    listContract: any[] = []; 
    
    //untuak filter dari prent
    
    filterContract:any = {} 
    

    // untuk fungsi get ALL relation
            getAllContract() {
    this.contractService.contractControllerFindAll().subscribe(
      data => this.listContract = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    dppMin: null,
  dppMax: null,
  idContract: null,
  nilaiInvoiceMin: null,
  nilaiInvoiceMax: null,
  ppnMin: null,
  ppnMax: null,
  tanggalDibayarRange: null,
  tanggalJatuhTempoRange: null,
  tanggalTerbitRange: null,
  updatedByRange: null
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
    search_field: string[] = ["alamatPenagihan","catatan","jenisInvoice","metodePembayaran","nomorInvoice","npwp","periode","picPenagihan"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dppMin: null,
  dppMax: null,
  idContract: null,
  nilaiInvoiceMin: null,
  nilaiInvoiceMax: null,
  ppnMin: null,
  ppnMax: null,
  tanggalDibayarRange: null,
  tanggalJatuhTempoRange: null,
  tanggalTerbitRange: null,
  updatedByRange: null
        };
        this.filter.status_invoice = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_invoice`] = { isNotNull: 'aktif' };

        this.invoiceReportService.invoiceReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "contract": this.filterContract, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "contract",
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
         { key: 'alamatPenagihan',  show: true },
              { key: 'catatan',  show: true },
              { key: 'createdAt',  show: true },
              { key: 'createdBy',  show: true },
              { key: 'dpp',  show: true },
              { key: 'jenisInvoice',  show: true },
              { key: 'metodePembayaran',  show: true },
              { key: 'nilaiInvoice',  show: true },
              { key: 'nomorInvoice',  show: true },
              { key: 'npwp',  show: true },
              { key: 'periode',  show: true },
              { key: 'picPenagihan',  show: true },
              { key: 'ppn',  show: true },
              { key: 'statusInvoice',  show: true },
              { key: 'tanggalDibayar',  show: true },
              { key: 'tanggalJatuhTempo',  show: true },
              { key: 'tanggalTerbit',  show: true },
              { key: 'updatedAt',  show: true },
              { key: 'updatedBy',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('invoice_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('invoice_columns');
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
                console.warn('Gagal parse invoice dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('invoice', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<InvoiceShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: InvoiceShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:PelangganInvoiceDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<InvoiceShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: InvoiceShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idInvoice:data.idInvoice
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