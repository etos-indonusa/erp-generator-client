import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { AmimsMaintenanceMaterialDto } from 'de-sdk-core';
import { MaintenanceMaterialService } from 'de-sdk-core';
import { MaintenanceMaterialShareAddComponent } from '../maintenance-material-share/maintenance-material-share-add/maintenance-material-share-add.component';
import { MaintenanceMaterialShareDetailComponent } from '../maintenance-material-share/maintenance-material-share-detail/maintenance-material-share-detail.component';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
@Component({
    selector: 'app-maintenance-material-list',
    templateUrl: './maintenance-material-list.component.html',
    styleUrls: ['./maintenance-material-list.component.scss']
})
export class MaintenanceMaterialListComponent {
    @Input('idMaintenance') idMaintenance: string = '' // replace dengan id+Nama
    @Input('itemType') itemType: string = '' // replace dengan id+Nama
    constructor(
        private drawerService: NzDrawerService,
        private acl: AclService,
        private cd: ChangeDetectorRef,

        private notify: NzNotificationService,
        private maintenanceMaterialService: MaintenanceMaterialService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnInit(): void {
        this.resetParam();
        this.filter = { idMaintenance: this.idMaintenance, itemType: this.itemType };
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

    filter_extra = false
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
        if (this.sortValue === 'asc') return 'asc';
        if (this.sortValue === 'desc') return 'desc';
        return undefined;
    }

    searchData(reset: boolean = false): void {
        if (reset) {
            this.pageIndex = 1
        }
        this.loading = true
        this.maintenanceMaterialService.maintenanceMaterialControllerFindAll(
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
                this.cd.detectChanges()
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
        if (!this.acl.can("maintenanceMaterial", 'can_add')) {
            return
        }
        const drawerRef = this.drawerService.create<MaintenanceMaterialShareAddComponent, {
        }, string>({
            nzTitle: 'Add',
            nzContent: MaintenanceMaterialShareAddComponent,
            nzContentParams: {
                idMaintenance: this.idMaintenance,
                itemType: this.itemType,
            },
            nzWidth: (500) + 'px',
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.searchData()
        });
    }
    edit(data: AmimsMaintenanceMaterialDto) {
        if (!this.acl.can("mitra", 'can_edit')) {
            return
        }
        const drawerRef = this.drawerService.create<MaintenanceMaterialShareAddComponent, {
        }, {
            maintenanceMaterial: AmimsMaintenanceMaterialDto
        }>({
            nzTitle: 'Edit',
            nzContent: MaintenanceMaterialShareAddComponent,
            nzContentParams: {
                maintenanceMaterial: data,
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


    delete(data: AmimsMaintenanceMaterialDto) {
        this.loading = true
        this.maintenanceMaterialService.maintenanceMaterialControllerRemove({ id: data.idMaintenanceMaterial }).subscribe(
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
        const drawerRef = this.drawerService.create<MaintenanceMaterialShareDetailComponent, {
        }, {
            data: AmimsMaintenanceMaterialDto
        }>({
            nzTitle: 'Detail MaintenanceMaterial',
            nzContent: MaintenanceMaterialShareDetailComponent,
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
