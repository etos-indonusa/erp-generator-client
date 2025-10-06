import { ChangeDetectorRef,Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { AmimsMaintenanceProgramMaterialDto } from 'de-sdk-core';
import { MaintenanceProgramMaterialService } from 'de-sdk-core';
import { MaintenanceProgramMaterialShareAddComponent } from '../maintenance-program-material-share/maintenance-program-material-share-add/maintenance-program-material-share-add.component';
import { MaintenanceProgramMaterialShareDetailComponent } from '../maintenance-program-material-share/maintenance-program-material-share-detail/maintenance-program-material-share-detail.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-maintenance-program-material-list',
    templateUrl: './maintenance-program-material-list.component.html',
    styleUrls: ['./maintenance-program-material-list.component.scss']
})
export class MaintenanceProgramMaterialListComponent {
    @Input('idMaintenanceProgram') idMaintenanceProgram: string // replace dengan id+Nama
    @Input('itemType') itemType: string // replace dengan id+Nama
    constructor(
        private drawerService: NzDrawerService,
        private acl: AclService,
        private cd: ChangeDetectorRef,

        private notify: NzNotificationService,
        private maintenanceProgramMaterialService: MaintenanceProgramMaterialService,
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
        this.filter = {
            ...this.filter,
            idMaintenanceProgram: this.idMaintenanceProgram,
            itemType: this.itemType
        }
        this.maintenanceProgramMaterialService.maintenanceProgramMaterialControllerFindAll(
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
        if (!this.acl.can("maintenanceProgramMaterial", 'can_add')) {
            return
        }
        const drawerRef = this.drawerService.create<MaintenanceProgramMaterialShareAddComponent, {
        }, string>({
            nzTitle: 'Add',
            nzContent: MaintenanceProgramMaterialShareAddComponent,
            nzContentParams: {
                idMaintenanceProgram: this.idMaintenanceProgram,
                itemType: this.itemType
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
edit(data:  AmimsMaintenanceProgramMaterialDto) {
        if (!this.acl.can("mitra", 'can_edit')) {
            return
        }
        const drawerRef = this.drawerService.create<MaintenanceProgramMaterialShareAddComponent, {
        }, {
            maintenanceProgramMaterial: AmimsMaintenanceProgramMaterialDto
        }>({
            nzTitle: 'Edit',
            nzContent: MaintenanceProgramMaterialShareAddComponent,
            nzContentParams: {
                maintenanceProgramMaterial: data,
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


delete (data: AmimsMaintenanceProgramMaterialDto) {
        this.loading = true
        this.maintenanceProgramMaterialService.maintenanceProgramMaterialControllerRemove({ id: data.idMaintenanceProgramMaterial }).subscribe(
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
        const drawerRef = this.drawerService.create<MaintenanceProgramMaterialShareDetailComponent, {
        }, {
            data: AmimsMaintenanceProgramMaterialDto
        }>({
            nzTitle: 'Detail MaintenanceProgramMaterial',
            nzContent: MaintenanceProgramMaterialShareDetailComponent,
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
