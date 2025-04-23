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
import { WorkflowReportService, WorkflowService } from 'de-sdk-core/lib/services';
import { ToolsWorkflowDto } from 'de-sdk-core/lib/models';
import { WorkflowShareAddComponent } from '../workflow-share-add/workflow-share-add.component';
import { WorkflowShareDetailComponent } from '../workflow-share-detail/workflow-share-detail.component';
import { KantorService } from 'de-sdk-core/lib/services';



@Component({
    selector: 'app-workflow-share-list',
    templateUrl: './workflow-share-list.component.html',
    styleUrl: './workflow-share-list.component.scss'
})
export class WorkflowShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = true;
    @Input('enable-crud') enable_crud = true;
    @Input('from-module') from_module :any = true;
    //untuak filter dari prent

    @Input('idKantor') idKantor: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private workflowReportService: WorkflowReportService,
        private workflowService: WorkflowService,
        private tokenService: TokenService,

        private kantorService: KantorService,
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.statusworkflow = this.status == 'semua' ? null : this.status;



        if (changes.idKantor) {
            this.filterKantor.idKantor = this.idKantor
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();

        this.getAllKantor();
    }


    listKantor: any[] = [];

    //untuak filter dari prent

    filterKantor: any = {}


    // untuk fungsi get ALL relation
    getAllKantor() {
        this.kantorService.kantorControllerFindAll().subscribe(
            data => this.listKantor = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        idKantor: null,
        isDefault: null
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
    search_field: string[] = ["forModule", "keterangan", "namaWorkflow", "targetDb", "targetTable"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            idKantor: null,
            isDefault: null
        };
        this.filter.statusworkflow = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_workflow`] = { isNotNull: 'aktif' };
        finalFilter[`for_module`] = this.from_module;

        this.workflowReportService.workflowReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                    {
                        "kantor": this.filterKantor, type: 'left'
                    }
                ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
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
        if (!this.acl.can('workflow', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<WorkflowShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: WorkflowShareAddComponent,
            nzWidth: (500) + 'px',
            nzContentParams:{
                for_module: this.from_module
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: ToolsWorkflowDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<WorkflowShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: WorkflowShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idWorkflow: data.idWorkflow
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