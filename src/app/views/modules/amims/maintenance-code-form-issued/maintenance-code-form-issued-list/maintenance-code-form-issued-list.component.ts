import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { AmimsMaintenanceCodeFormIssuedDto } from 'src/sdk/core/models';
import { MaintenanceCodeFormIssuedService } from 'src/sdk/core/services';
import { MaintenanceCodeFormIssuedShareAddComponent } from '../maintenance-code-form-issued-share/maintenance-code-form-issued-share-add/maintenance-code-form-issued-share-add.component';
import { MaintenanceCodeFormIssuedShareDetailComponent } from '../maintenance-code-form-issued-share/maintenance-code-form-issued-share-detail/maintenance-code-form-issued-share-detail.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-maintenance-code-form-issued-list',
    templateUrl: './maintenance-code-form-issued-list.component.html',
    styleUrl: './maintenance-code-form-issued-list.component.scss'
})
export class MaintenanceCodeFormIssuedListComponent {
    constructor(
        private drawerService: NzDrawerService,
        private acl: AclService,

        private notify: NzNotificationService,
        private maintenanceCodeFormIssuedService: MaintenanceCodeFormIssuedService,
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
        this.maintenanceCodeFormIssuedService.maintenanceCodeFormIssuedControllerFindAll(
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
        if (!this.acl.can("maintenanceCodeFormIssued", 'can_add')) {
            return
        }
        const drawerRef = this.drawerService.create<MaintenanceCodeFormIssuedShareAddComponent, {
        }, string>({
            nzTitle: 'Add',
            nzContent: MaintenanceCodeFormIssuedShareAddComponent,
            nzWidth: (500) + 'px',
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.searchData()
        });
    }
edit(data:  AmimsMaintenanceCodeFormIssuedDto) {
        if (!this.acl.can("mitra", 'can_edit')) {
            return
        }
        const drawerRef = this.drawerService.create<MaintenanceCodeFormIssuedShareAddComponent, {
        }, {
            maintenanceCodeFormIssued: AmimsMaintenanceCodeFormIssuedDto
        }>({
            nzTitle: 'Edit',
            nzContent: MaintenanceCodeFormIssuedShareAddComponent,
            nzContentParams: {
                maintenanceCodeFormIssued: data,
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


delete (data: AmimsMaintenanceCodeFormIssuedDto) {
        this.loading = true
        this.maintenanceCodeFormIssuedService.maintenanceCodeFormIssuedControllerRemove({ id: data.idMaintenanceCodeFormIssued }).subscribe(
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
        const drawerRef = this.drawerService.create<MaintenanceCodeFormIssuedShareDetailComponent, {
        }, {
            data: AmimsMaintenanceCodeFormIssuedDto
        }>({
            nzTitle: 'Detail MaintenanceCodeFormIssued',
            nzContent: MaintenanceCodeFormIssuedShareDetailComponent,
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
}
