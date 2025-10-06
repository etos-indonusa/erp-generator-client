import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { AmimsMaintenanceProgramDocumentDto } from 'de-sdk-core';
import { MaintenanceProgramDocumentService } from 'de-sdk-core';
import { MaintenanceProgramDocumentShareAddComponent } from '../maintenance-program-document-share/maintenance-program-document-share-add/maintenance-program-document-share-add.component';
import { MaintenanceProgramDocumentShareDetailComponent } from '../maintenance-program-document-share/maintenance-program-document-share-detail/maintenance-program-document-share-detail.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-maintenance-program-document-list',
    templateUrl: './maintenance-program-document-list.component.html',
    styleUrls: ['./maintenance-program-document-list.component.scss']
})
export class MaintenanceProgramDocumentListComponent {
    @Input('idMaintenanceProgram') idMaintenanceProgram: string // replace dengan id+Nama
    constructor(
        private drawerService: NzDrawerService,
        private acl: AclService,
        private cd: ChangeDetectorRef,

        private notify: NzNotificationService,
        private maintenanceProgramDocumentService: MaintenanceProgramDocumentService,
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
            idMaintenanceProgram: this.idMaintenanceProgram
        }
        this.maintenanceProgramDocumentService.maintenanceProgramDocumentControllerFindAll(
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
        if (!this.acl.can("maintenanceProgramDocument", 'can_add')) {
            return
        }
        const drawerRef = this.drawerService.create<MaintenanceProgramDocumentShareAddComponent, {
        }, string>({
            nzTitle: 'Add',
            nzContent: MaintenanceProgramDocumentShareAddComponent,
            nzContentParams: {
                idMaintenanceProgram: this.idMaintenanceProgram
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
    edit(data: AmimsMaintenanceProgramDocumentDto) {
        if (!this.acl.can("mitra", 'can_edit')) {
            return
        }
        const drawerRef = this.drawerService.create<MaintenanceProgramDocumentShareAddComponent, {
        }, {
            maintenanceProgramDocument: AmimsMaintenanceProgramDocumentDto
        }>({
            nzTitle: 'Edit',
            nzContent: MaintenanceProgramDocumentShareAddComponent,
            nzContentParams: {
                maintenanceProgramDocument: data,
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


    delete(data: AmimsMaintenanceProgramDocumentDto) {
        this.loading = true
        this.maintenanceProgramDocumentService.maintenanceProgramDocumentControllerRemove({ id: data.idMaintenanceProgramDocument }).subscribe(
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
        const drawerRef = this.drawerService.create<MaintenanceProgramDocumentShareDetailComponent, {
        }, {
            data: AmimsMaintenanceProgramDocumentDto
        }>({
            nzTitle: 'Detail MaintenanceProgramDocument',
            nzContent: MaintenanceProgramDocumentShareDetailComponent,
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
