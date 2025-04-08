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
import { ContractReportService, ContractService } from 'src/sdk/core/services';
import { ContractDto } from 'src/sdk/core/models';
import { ContractShareAddComponent } from '../contract-share-add/contract-share-add.component';
import { ContractShareDetailComponent } from '../contract-share-detail/contract-share-detail.component';
import { ClientService } from 'src/sdk/core/services';
import { ContractJenisService } from 'src/sdk/core/services';
import { KantorService } from 'src/sdk/core/services';
 


@Component({
    selector: 'app-contract-share-list',
    templateUrl: './contract-share-list.component.html',
    styleUrl: './contract-share-list.component.scss'
})
export class ContractShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private contractReportService: ContractReportService,
        private contractService: ContractService,
        private tokenService: TokenService,

                        private clientService: ClientService,
                private contractJenisService: ContractJenisService,
                private kantorService: KantorService,
                    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.statuscontract = this.status == 'semua' ? null : this.status;
        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();

                            this.getAllClient();
                    this.getAllContractJenis();
                    this.getAllKantor();
                    }

    
    listClient: any[] = [];
    
    listContractJenis: any[] = [];
    
    listKantor: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllClient() {
    this.clientService.clientControllerFindAll().subscribe(
      data => this.listClient = data.data ?? []
    );
  }
        getAllContractJenis() {
    this.contractJenisService.contractJenisControllerFindAll().subscribe(
      data => this.listContractJenis = data.data ?? []
    );
  }
        getAllKantor() {
    this.kantorService.kantorControllerFindAll().subscribe(
      data => this.listKantor = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    durasiBulanMin: null,
  durasiBulanMax: null,
  feeSalesMin: null,
  feeSalesMax: null,
  idClient: null,
  idContractJenis: null,
  idKantor: null,
  isAutoInvoice: null,
  nilaiAkhirMin: null,
  nilaiAkhirMax: null,
  nilaiBulananMin: null,
  nilaiBulananMax: null,
  nilaiDiawalMin: null,
  nilaiDiawalMax: null,
  nilaiKontrakMin: null,
  nilaiKontrakMax: null,
  presentaseFeeMin: null,
  presentaseFeeMax: null,
  tanggalAkhirRange: null,
  tanggalKontrakRange: null,
  tanggalMulaiRange: null
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
    search_field: string[] = ["catatanKontrak","dokumenUrl","namaSales","nomorKontrak","refKontrakSebelumnya","statusContract"];

    filter_extra = true;
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            durasiBulanMin: null,
  durasiBulanMax: null,
  feeSalesMin: null,
  feeSalesMax: null,
  idClient: null,
  idContractJenis: null,
  idKantor: null,
  isAutoInvoice: null,
  nilaiAkhirMin: null,
  nilaiAkhirMax: null,
  nilaiBulananMin: null,
  nilaiBulananMax: null,
  nilaiDiawalMin: null,
  nilaiDiawalMax: null,
  nilaiKontrakMin: null,
  nilaiKontrakMax: null,
  presentaseFeeMin: null,
  presentaseFeeMax: null,
  tanggalAkhirRange: null,
  tanggalKontrakRange: null,
  tanggalMulaiRange: null
        };
        this.filter.statuscontract = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_contract`] = { isNotNull: 'aktif' };

        this.contractReportService.contractReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: {
  "client": {},
  "contract": {},
  "contract_jenis": {},
  "kantor": {}
},
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "client",
    "type": "single"
  },
  {
    "name": "contract",
    "type": "single"
  },
  {
    "name": "contract_jenis",
    "type": "single"
  },
  {
    "name": "kantor",
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
        if (!this.acl.can('contract', 'can_add')) return;

        const drawerRef = this.drawerService.create<ContractShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: ContractShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:ContractDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<ContractShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: ContractShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idContract:data.idContract
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