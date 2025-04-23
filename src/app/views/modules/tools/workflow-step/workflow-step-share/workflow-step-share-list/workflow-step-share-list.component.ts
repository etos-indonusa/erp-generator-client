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
import { WorkflowStepReportService, WorkflowStepService } from 'de-sdk-core';
import { ToolsWorkflowStepDto } from 'de-sdk-core';
import { WorkflowStepShareAddComponent } from '../workflow-step-share-add/workflow-step-share-add.component';
import { WorkflowStepShareDetailComponent } from '../workflow-step-share-detail/workflow-step-share-detail.component';
import { WorkflowService } from 'de-sdk-core';



@Component({
    selector: 'app-workflow-step-share-list',
    templateUrl: './workflow-step-share-list.component.html',
    styleUrl: './workflow-step-share-list.component.scss'
})
export class WorkflowStepShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = true;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent

    @Input('idWorkflow') idWorkflow: string | null = null;


    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private workflowStepReportService: WorkflowStepReportService,
        private workflowStepService: WorkflowStepService,
        private tokenService: TokenService,

        private workflowService: WorkflowService,
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.statusworkflowStep = this.status == 'semua' ? null : this.status;



        if (changes.idWorkflow) {
            this.filterWorkflow.idWorkflow = this.idWorkflow
        }



        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();

        this.getAllWorkflow();
    }


    listWorkflow: any[] = [];

    //untuak filter dari prent

    filterWorkflow: any = {}


    // untuk fungsi get ALL relation
    getAllWorkflow() {
        this.workflowService.workflowControllerFindAll().subscribe(
            data => this.listWorkflow = data.data ?? []
        );
    }

    currentUser: any = {};
    filter: any = {
        idWorkflow: null,
        urutanMin: null,
        urutanMax: null
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
    sortKey: string | null = 'urutan';
    search: string | null = null;
    search_field: string[] = ["allowRoles", "allowUserIds", "customCheckSql", "messageBefore", "ruleJson", "triggerJson"];

    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'urutan';
        this.search = null;
        this.filter = {
            idWorkflow: null,
            urutanMin: null,
            urutanMax: null
        };
        this.filter.statusworkflowStep = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_workflow_step`] = { isNotNull: 'aktif' };

        this.workflowStepReportService.workflowStepReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [{
                    "workflow": this.filterWorkflow
                }],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "workflow",
                        "type": "single"
                    }
                ],
                sortKey: this.sortKey ?? undefined,
                sortValue: this.validSortValue,
                pageIndex: this.pageIndex,
                pageSize: this.pageSize
            }
        }).subscribe(data => {
           
            this.total = data.total || 0;
            this.listOfData = data.data || [];
            this.loading = false;
             
        }, err => {
            this.loading = false;
        });
    }

    currentSort: any = {};
    onQueryParamsChange(params: NzTableQueryParams): void {
        this.pageIndex = params.pageIndex;
        this.pageSize = params.pageSize;
        this.currentSort = params.sort.find(item => item.value !== null);
        this.sortKey = (this.currentSort && this.currentSort.key) || 'urutan';
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
        if (!this.acl.can('workflow-step', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<WorkflowStepShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: WorkflowStepShareAddComponent,
            nzWidth: (900) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }



    detail(data: ToolsWorkflowStepDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<WorkflowStepShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: WorkflowStepShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams: {
                idWorkflowStep: data.idWorkflowStep
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