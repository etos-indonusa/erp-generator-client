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
import { ContractShareAddComponent } from '../contract-share-add/contract-share-add.component';

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
        private akutansiVoucherService: ContractService,
        private tokenService: TokenService,
    ) {
        // this.router.routeReuseStrategy.shouldReuseRoute = function () {
        //     return false;
        // };
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.filter.status = this.status == 'semua' ? null : this.status
        this.searchData()
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser
        this.resetParam();
    }

    currentUser: any = {};

    filter: any = {
        periode: 'month'
    }
    expandSet = new Set<string>();
    onExpandChange(id: string, checked: boolean): void {
        if (checked) {
            this.expandSet.add(id);
        } else {
            this.expandSet.delete(id);
        }
    }

    pageIndex = 1
    pageSize = 30
    total = 0
    listOfData: any[] = []
    loading = true
    sortValue: string | null = "asc"
    sortKey: string | null = "created_at"
    search: string | null = null
    search_field: string[] = ["namaResmi"]

    filter_extra = true
    breadCrumbItems = [
        { label: 'List', active: false }
    ]
    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = "asc"
        this.sortKey = "created_at"
        this.search = null;
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
        if (reset) {
            this.pageIndex = 1
        }
        this.loading = true
        this.contractReportService.contractReportControllerFindAll(
            {
                body: {
                    filter: {
                        status_kontrak: { eq: 'aktif' }
                    },
                    joinWhere: { 
                        kantor: {
                            
                        }
                    }
                    ,
                    search_field: this.search_field,
                    search_keyword: this.search || undefined,
                    include: [
                        {
                            name: 'client',
                            type: 'single'
                        },
                        {
                            name: 'kantor',
                            type: 'single'
                        },
                        {
                            name: 'contract_jenis',
                            type: 'single'
                        },
                        {
                            name: 'contract_site',
                            type: 'array'
                        }
                    ],
                    sortKey: this.sortKey ?? undefined,
                    sortValue: this.validSortValue,
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }
            }
        )
            .subscribe((data: any) => {
                this.loading = false
                this.total = data.total
                this.listOfData = data.data
            },
                err => {
                    this.loading = false
                })
    }
    currentSort: any = {}
    onQueryParamsChange(params: NzTableQueryParams): void {
        console.log(params);
        this.pageIndex = params.pageIndex
        this.pageSize = params.pageSize
        this.currentSort = params.sort.find(item => item.value !== null);
        this.sortKey = (this.currentSort && this.currentSort.key) || "created_at";
        this.sortValue = (this.currentSort && this.currentSort.value) || "asc";
        this.searchData();
    }

    add() {
        if (!this.acl.can("client", 'can_add')) {
            return
        }
        const drawerRef = this.drawerService.create<ContractShareAddComponent, {
        }, string>({
            nzTitle: 'Add',
            nzContent: ContractShareAddComponent,
            nzWidth: (window.innerWidth * 0.9) + 'px',
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.searchData()
        });
    }

    update(data: any) {

    }

    delete(id: string) {

    }

    detail(filter: any) {

    }

    print() {
        let url = environment.srv_document + '/pdfAkutansi/vouchers?filter=' + JSON.stringify(this.filter) + '&token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
