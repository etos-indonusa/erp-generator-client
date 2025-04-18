import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { AclModuleDto } from 'src/sdk/core/models';
import { ModuleService } from 'src/sdk/core/services';
import { ModuleShareAddComponent } from '../module-share/module-share-add/module-share-add.component';
import { ModuleShareDetailComponent } from '../module-share/module-share-detail/module-share-detail.component';
import { TranslateService } from '@ngx-translate/core';
import { CustomFieldGroupShareDetailComponent } from '../../custom-field-group/custom-field-group-share/custom-field-group-share-detail/custom-field-group-share-detail.component';
import { WorkflowShareListComponent } from '../../workflow/workflow-share/workflow-share-list/workflow-share-list.component';
import { DocumentNumberingListComponent } from '../../document-numbering/document-numbering-list/document-numbering-list.component';

@Component({
    selector: 'app-module-list',
    templateUrl: './module-list.component.html',
    styleUrl: './module-list.component.scss'
})
export class ModuleListComponent {
    constructor(
        private drawerService: NzDrawerService,
        private acl: AclService,

        private notify: NzNotificationService,
        private moduleService: ModuleService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnInit(): void {
        this.resetParam();
    }

    filter: any = {}

    pageIndex = 1
    pageSize = 30
    total = 0
    listOfData: any[] = []
    loading = true
    sortValue: string | null = "asc"
    sortKey: string | null = "createdAt"
    search: string | null = null
    search_field: string[] = []

    filter_extra = true
    breadCrumbItems = [
        { label: 'List', active: false }
    ]
    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = "asc"
        this.sortKey = "createdAt"
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
        this.moduleService.moduleControllerFindAll(
            {
                filter: JSON.stringify(this.filter),
                search_field: this.search_field,
                search_keyword: this.search ?? undefined,
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
                sortKey: this.sortKey ?? undefined,
                sortValue: this.validSortValue
            }
        )
            .subscribe((data: any) => {
                this.loading = false
                this.total = data.total
                this.listOfData = data.data
                // this.custumfieldGroup(data.data.find((x: AclModuleDto) => x.idModule == 'PelangganContract'))
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
        this.sortKey = (this.currentSort && this.currentSort.key) || "createdAt";
        this.sortValue = (this.currentSort && this.currentSort.value) || "asc";
        this.searchData();
    }

    add() {
        if (!this.acl.can("module", 'can_add')) {
            return
        }
        const drawerRef = this.drawerService.create<ModuleShareAddComponent, {
        }, string>({
            nzTitle: 'Add',
            nzContent: ModuleShareAddComponent,
            nzWidth: (500) + 'px',
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.searchData()
        });
    }
    edit(data: AclModuleDto) {
        if (!this.acl.can("mitra", 'can_edit')) {
            return
        }
        const drawerRef = this.drawerService.create<ModuleShareAddComponent, {
        }, {
            module: AclModuleDto
        }>({
            nzTitle: 'Edit',
            nzContent: ModuleShareAddComponent,
            nzContentParams: {
                module: data,
            },
            nzWidth: (window.innerWidth * 0.5) + 'px',
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.searchData()
        });
    }


    delete(data: AclModuleDto) {
        this.loading = true
        this.moduleService.moduleControllerRemove({ id: data.idModule }).subscribe(
            data => {
                this.searchData();
                this.notify.error('Berhasil', 'Dihapus.');
            }
        )
    }

    detail(data: any) {
        if (!this.acl.can("mitra", 'can_list')) {
            return
        }
        const drawerRef = this.drawerService.create<ModuleShareDetailComponent, {
        }, {
            data: AclModuleDto
        }>({
            nzTitle: 'Detail Module',
            nzContent: ModuleShareDetailComponent,
            nzContentParams: {
                data: data,
            },
            nzWidth: (500) + 'px',
        });
        // drawerRef.afterOpen.subscribe(() => {
        //     console.log('Drawer(Component) open');
        // });
        // drawerRef.afterClose.subscribe(data => {
        //     this.searchData()
        // });
    }

    custumfieldGroup(data: AclModuleDto) {
        if (!this.acl.can("mitra", 'can_list')) {
            return
        }
        const drawerRef = this.drawerService.create<CustomFieldGroupShareDetailComponent, {
        }, {

        }>({
            nzTitle: 'Custum Field',
            nzContent: CustomFieldGroupShareDetailComponent,
            nzContentParams: {
                fromModule: data.idModule,
            },
            nzWidth: (900) + 'px',
        });
        // drawerRef.afterOpen.subscribe(() => {
        //     console.log('Drawer(Component) open');
        // });
        // drawerRef.afterClose.subscribe(data => {
        //     this.searchData()
        // });
    }

    workFLow(data: AclModuleDto) {
        if (!this.acl.can("mitra", 'can_list')) {
            return
        }
        const drawerRef = this.drawerService.create<WorkflowShareListComponent, {
        }, {

        }>({
            nzTitle: 'WorkFLow',
            nzContent: WorkflowShareListComponent,
            nzContentParams: {
                from_module: data.idModule,
            },
            nzWidth: (window.innerWidth - 100) + 'px',
        });
    }

    penormoran(data: AclModuleDto) {
        if (!this.acl.can("mitra", 'can_list')) {
            return
        }
        const drawerRef = this.drawerService.create<DocumentNumberingListComponent, {
        }, {

        }>({
            nzTitle: 'Numbering',
            nzContent: DocumentNumberingListComponent,
            nzContentParams: {
                for_module: data.idModule,
            },
            nzWidth: (window.innerWidth - 100) + 'px',
        });
    }
}
