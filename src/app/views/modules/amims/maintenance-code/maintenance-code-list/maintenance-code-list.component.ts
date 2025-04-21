import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { AmimsMaintenanceCodeDto } from 'src/sdk/core/models';
import { MaintenanceCodeService } from 'src/sdk/core/services';
import { MaintenanceCodeShareAddComponent } from '../maintenance-code-share/maintenance-code-share-add/maintenance-code-share-add.component';
import { MaintenanceCodeShareDetailComponent } from '../maintenance-code-share/maintenance-code-share-detail/maintenance-code-share-detail.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-maintenance-code-list',
    templateUrl: './maintenance-code-list.component.html',
    styleUrl: './maintenance-code-list.component.scss'
})
export class MaintenanceCodeListComponent {
    constructor(
        private drawerService: NzDrawerService,
        private acl: AclService,

        private notify: NzNotificationService,
        private maintenanceCodeService: MaintenanceCodeService,
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
        this.maintenanceCodeService.maintenanceCodeControllerFindAll(
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
        if (!this.acl.can("maintenanceCode", 'can_add')) {
            return
        }
        const drawerRef = this.drawerService.create<MaintenanceCodeShareAddComponent, {
        }, string>({
            nzTitle: 'Add',
            nzContent: MaintenanceCodeShareAddComponent,
            nzWidth: (500) + 'px',
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.searchData()
        });
    }
edit(data:  AmimsMaintenanceCodeDto) {
        if (!this.acl.can("mitra", 'can_edit')) {
            return
        }
        const drawerRef = this.drawerService.create<MaintenanceCodeShareAddComponent, {
        }, {
            maintenanceCode: AmimsMaintenanceCodeDto
        }>({
            nzTitle: 'Edit',
            nzContent: MaintenanceCodeShareAddComponent,
            nzContentParams: {
                maintenanceCode: data,
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


delete (data: AmimsMaintenanceCodeDto) {
        this.loading = true
        this.maintenanceCodeService.maintenanceCodeControllerRemove({ id: data.idMaintenanceCode }).subscribe(
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
        const drawerRef = this.drawerService.create<MaintenanceCodeShareDetailComponent, {
        }, {
            data: AmimsMaintenanceCodeDto
        }>({
            nzTitle: 'Detail MaintenanceCode',
            nzContent: MaintenanceCodeShareDetailComponent,
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
