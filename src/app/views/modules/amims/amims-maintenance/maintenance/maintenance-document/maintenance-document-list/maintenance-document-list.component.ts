import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { AmimsMaintenanceDocumentDto } from 'de-sdk-core';
import { MaintenanceDocumentService } from 'de-sdk-core';
import { MaintenanceDocumentShareAddComponent } from '../maintenance-document-share/maintenance-document-share-add/maintenance-document-share-add.component';
import { MaintenanceDocumentShareDetailComponent } from '../maintenance-document-share/maintenance-document-share-detail/maintenance-document-share-detail.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-maintenance-document-list',
    templateUrl: './maintenance-document-list.component.html',
    styleUrls: ['./maintenance-document-list.component.scss']
})
export class MaintenanceDocumentListComponent {
    @Input('idMaintenance') idMaintenance: string = '' // replace dengan id+Nama
    @Input('documentType') documentType: string = '' // replace dengan id+Nama
    constructor(
        private drawerService: NzDrawerService,
        private acl: AclService,
        private cd: ChangeDetectorRef,

        private notify: NzNotificationService,
        private maintenanceDocumentService: MaintenanceDocumentService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnInit(): void {
        this.resetParam();
        this.filter = { idMaintenance: this.idMaintenance, documentType: this.documentType };
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
        if (this.sortValue === 'asc') return 'asc';
        if (this.sortValue === 'desc') return 'desc';
        return undefined;
    }

    searchData(reset: boolean = false): void {
        if (reset) {
            this.pageIndex = 1
        }
        this.loading = true
        this.maintenanceDocumentService.maintenanceDocumentControllerFindAll(
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
        if (!this.acl.can("maintenanceDocument", 'can_add')) {
            return
        }
        const drawerRef = this.drawerService.create<MaintenanceDocumentShareAddComponent, {
        }, string>({
            nzTitle: 'Add',
            nzContent: MaintenanceDocumentShareAddComponent,
            nzContentParams: {
                idMaintenance: this.idMaintenance,
                documentType: this.documentType,
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
    edit(data: AmimsMaintenanceDocumentDto) {
        if (!this.acl.can("mitra", 'can_edit')) {
            return
        }
        const drawerRef = this.drawerService.create<MaintenanceDocumentShareAddComponent, {
        }, {
            maintenanceDocument: AmimsMaintenanceDocumentDto
        }>({
            nzTitle: 'Edit',
            nzContent: MaintenanceDocumentShareAddComponent,
            nzContentParams: {
                maintenanceDocument: data,
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


    delete(data: AmimsMaintenanceDocumentDto) {
        this.loading = true
        this.maintenanceDocumentService.maintenanceDocumentControllerRemove({ id: data.idMaintenanceDocument }).subscribe(
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
        const drawerRef = this.drawerService.create<MaintenanceDocumentShareDetailComponent, {
        }, {
            data: AmimsMaintenanceDocumentDto
        }>({
            nzTitle: 'Detail MaintenanceDocument',
            nzContent: MaintenanceDocumentShareDetailComponent,
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
