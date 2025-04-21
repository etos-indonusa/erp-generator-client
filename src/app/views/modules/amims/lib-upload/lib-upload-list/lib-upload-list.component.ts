import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { AmimsLibUploadDto } from 'src/sdk/core/models';
import { LibUploadService } from 'src/sdk/core/services';
import { LibUploadShareAddComponent } from '../lib-upload-share/lib-upload-share-add/lib-upload-share-add.component';
import { LibUploadShareDetailComponent } from '../lib-upload-share/lib-upload-share-detail/lib-upload-share-detail.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-lib-upload-list',
    templateUrl: './lib-upload-list.component.html',
    styleUrl: './lib-upload-list.component.scss'
})
export class LibUploadListComponent {
    constructor(
        private drawerService: NzDrawerService,
        private acl: AclService,

        private notify: NzNotificationService,
        private libUploadService: LibUploadService,
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
        this.libUploadService.libUploadControllerFindAll(
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
        if (!this.acl.can("libUpload", 'can_add')) {
            return
        }
        const drawerRef = this.drawerService.create<LibUploadShareAddComponent, {
        }, string>({
            nzTitle: 'Add',
            nzContent: LibUploadShareAddComponent,
            nzWidth: (500) + 'px',
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.searchData()
        });
    }
edit(data:  AmimsLibUploadDto) {
        if (!this.acl.can("mitra", 'can_edit')) {
            return
        }
        const drawerRef = this.drawerService.create<LibUploadShareAddComponent, {
        }, {
            libUpload: AmimsLibUploadDto
        }>({
            nzTitle: 'Edit',
            nzContent: LibUploadShareAddComponent,
            nzContentParams: {
                libUpload: data,
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


delete (data: AmimsLibUploadDto) {
        this.loading = true
        this.libUploadService.libUploadControllerRemove({ id: data.idLibUpload }).subscribe(
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
        const drawerRef = this.drawerService.create<LibUploadShareDetailComponent, {
        }, {
            data: AmimsLibUploadDto
        }>({
            nzTitle: 'Detail LibUpload',
            nzContent: LibUploadShareDetailComponent,
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
