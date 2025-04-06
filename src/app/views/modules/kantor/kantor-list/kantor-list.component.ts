import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { KantorDto } from 'src/sdk/core/models';
import { KantorService } from 'src/sdk/core/services';
import { KantorShareAddComponent } from '../kantor-share/kantor-share-add/kantor-share-add.component';
import { KantorShareDetailComponent } from '../kantor-share/kantor-share-detail/kantor-share-detail.component';

@Component({
    selector: 'app-kantor-list',
    templateUrl: './kantor-list.component.html',
    styleUrl: './kantor-list.component.scss'
})
export class KantorListComponent {
    constructor(
        private drawerService: NzDrawerService,
        private acl: AclService,

        private notify: NzNotificationService,
        private kantorService: KantorService,
    ) { }

    ngOnInit(): void {
        this.resetParam();
    }

    mitra: any = {}

    pageIndex = 1
    pageSize = 30
    total = 0
    listOfData: any[] = []
    loading = true
    sortValue: string | null = "asc"
    sortKey: string | null = "nama_mitra"
    search: string | null = null
    search_field: string[] = ['nama_kantor', 'kode_kantor', 'alamat']

    filter_extra = true
    breadCrumbItems = [
        { label: 'List', active: false }
    ]
    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = "asc"
        this.sortKey = "nama_kantor"
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
        this.kantorService.kantorControllerFindAll(
            {
                filter: JSON.stringify(this.mitra),
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
        this.sortKey = (this.currentSort && this.currentSort.key) || "nama_kantor";
        this.sortValue = (this.currentSort && this.currentSort.value) || "asc";
        this.searchData();
    }

    add() {
        if (!this.acl.can("kantor", 'can_add')) {
            return
        }
        const drawerRef = this.drawerService.create<KantorShareAddComponent, {
        }, string>({
            nzTitle: 'Add',
            nzContent: KantorShareAddComponent,
            nzWidth: (500) + 'px',
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.searchData()
        });
    }
    edit(data: KantorDto) {
        if (!this.acl.can("mitra", 'can_edit')) {
            return
        }
        const drawerRef = this.drawerService.create<KantorShareAddComponent, {
        }, {
            kantor: KantorDto
        }>({
            nzTitle: 'Edit',
            nzContent: KantorShareAddComponent,
            nzContentParams: {
                kantor: data,
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


    delete(data: KantorDto) {
        this.loading = true
        this.kantorService.kantorControllerRemove({ id: data.idKantor }).subscribe(
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
        const drawerRef = this.drawerService.create<KantorShareDetailComponent, {
        }, {
            data: KantorDto
        }>({
            nzTitle: 'Detail Kantor',
            nzContent: KantorShareDetailComponent,
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
