import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { AmimsDoctypeDto } from 'src/sdk/core/models';
import { DoctypeService } from 'src/sdk/core/services';
import { DoctypeShareAddComponent } from '../doctype-share/doctype-share-add/doctype-share-add.component';
import { DoctypeShareDetailComponent } from '../doctype-share/doctype-share-detail/doctype-share-detail.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-doctype-list',
    templateUrl: './doctype-list.component.html',
    styleUrl: './doctype-list.component.scss'
})
export class DoctypeListComponent {
    constructor(
        private drawerService: NzDrawerService,
        private acl: AclService,

        private notify: NzNotificationService,
        private doctypeService: DoctypeService,
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
        this.doctypeService.doctypeControllerFindAll(
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
        if (!this.acl.can("doctype", 'can_add')) {
            return
        }
        const drawerRef = this.drawerService.create<DoctypeShareAddComponent, {
        }, string>({
            nzTitle: 'Add',
            nzContent: DoctypeShareAddComponent,
            nzWidth: (500) + 'px',
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.searchData()
        });
    }
edit(data:  AmimsDoctypeDto) {
        if (!this.acl.can("mitra", 'can_edit')) {
            return
        }
        const drawerRef = this.drawerService.create<DoctypeShareAddComponent, {
        }, {
            doctype: AmimsDoctypeDto
        }>({
            nzTitle: 'Edit',
            nzContent: DoctypeShareAddComponent,
            nzContentParams: {
                doctype: data,
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


delete (data: AmimsDoctypeDto) {
        this.loading = true
        this.doctypeService.doctypeControllerRemove({ id: data.idDoctype }).subscribe(
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
        const drawerRef = this.drawerService.create<DoctypeShareDetailComponent, {
        }, {
            data: AmimsDoctypeDto
        }>({
            nzTitle: 'Detail Doctype',
            nzContent: DoctypeShareDetailComponent,
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
