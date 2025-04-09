import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { PesanService } from 'src/app/shared/services/pesan.service';
import { environment } from 'src/environments/environment.prod';
import { ContractSiteReportService, ContractSiteService } from 'src/sdk/core/services';
import { ContractSiteDto } from 'src/sdk/core/models';
import { ContractSiteShareAddComponent } from '../contract-site-share-add/contract-site-share-add.component';
import { ContractSiteShareDetailComponent } from '../contract-site-share-detail/contract-site-share-detail.component';
import { ClientSiteService } from 'src/sdk/core/services';
import { ContractService } from 'src/sdk/core/services';
 


@Component({
    selector: 'app-contract-site-share-list',
    templateUrl: './contract-site-share-list.component.html',
    styleUrl: './contract-site-share-list.component.scss'
})
export class ContractSiteShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = true;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idClientSite') idClientSite: string | null  = null;
     
    @Input('idContract') idContract: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private contractSiteReportService: ContractSiteReportService,
        private contractSiteService: ContractSiteService,
        private tokenService: TokenService,

                        private clientSiteService: ClientSiteService,
                private contractService: ContractService,
                    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.statuscontractSite = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idClientSite)
            {
                this.filterClientSite.idClientSite = this.idClientSite
            }
            
           
            if (changes.idContract)
            {
                this.filterContract.idContract = this.idContract
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();

                            this.getAllClientSite();
                    this.getAllContract();
                    }

    
    listClientSite: any[] = []; 
    
    listContract: any[] = []; 
    
    //untuak filter dari prent
    
    filterClientSite:any = {} 
    
    filterContract:any = {} 
    

    // untuk fungsi get ALL relation
            getAllClientSite() {
    this.clientSiteService.clientSiteControllerFindAll().subscribe(
      data => this.listClientSite = data.data ?? []
    );
  }
        getAllContract() {
    this.contractService.contractControllerFindAll().subscribe(
      data => this.listContract = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    biayaAkhirMin: null,
  biayaAkhirMax: null,
  biayaBulananMin: null,
  biayaBulananMax: null,
  biayaDiawalMin: null,
  biayaDiawalMax: null,
  idClientSite: null,
  idContract: null,
  jumlahJadwalPerBulanMin: null,
  jumlahJadwalPerBulanMax: null
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
    search_field: string[] = ["catatan"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            biayaAkhirMin: null,
  biayaAkhirMax: null,
  biayaBulananMin: null,
  biayaBulananMax: null,
  biayaDiawalMin: null,
  biayaDiawalMax: null,
  idClientSite: null,
  idContract: null,
  jumlahJadwalPerBulanMin: null,
  jumlahJadwalPerBulanMax: null
        };
        this.filter.statuscontractSite = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_contract_site`] = { isNotNull: 'aktif' };

        this.contractSiteReportService.contractSiteReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: {
                                    "client_site": this.filterClientSite,
                                    "contract": this.filterContract
                                },
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "client_site",
    "type": "single"
  },
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
    add() {
    if (!this.acl.can('contract-site', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<ContractSiteShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: ContractSiteShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:ContractSiteDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<ContractSiteShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: ContractSiteShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idContractSite:data.idContractSite
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