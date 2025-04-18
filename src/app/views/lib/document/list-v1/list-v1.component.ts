import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service'; 
import { DocumentDocumentDto } from 'src/sdk/core/models/document-document-dto';
import { DocumentService } from 'src/sdk/core/services/document.service';
import { UploadDrawerComponent } from '../upload-drawer/upload-drawer.component';


@Component({
    selector: 'document-list-v1',
    templateUrl: './list-v1.component.html',
    styleUrl: './list-v1.component.scss'
})
export class ListV1Component {
    @Input('for-module') forModule!: string;
    @Input('for-module-id') forModuleId!: string;
    @Input('enable-crud') enableCrud: boolean = false;
    @Output('reload') reload = new EventEmitter()
    @Output('total-data') totalData = new EventEmitter();


    constructor(
        private drawerService: NzDrawerService,
        private acl: AclService,

        private notify: NzNotificationService,
        private documentService: DocumentService,
    ) { }

    ngOnInit(): void {
        this.resetParam();
    }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        if (changes.forModuleId) {
            this.filter.for_module = this.forModule;
            this.filter.for_module_id = this.forModuleId;
        }
    }

    filter: any = {}

    pageIndex = 1
    pageSize = 30
    total = 0
    listOfData: any[] = []
    loading = true
    sortValue: string | null = "asc"
    sortKey: string | null = "created_at"
    search: string | null = null
    search_field: string[] = ["name", "nomor"]

    filter_extra = true
    breadCrumbItems = [
        { label: 'List', active: false }
    ]
    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = "asc"
        this.sortKey = "created_at"
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
    download(doc: DocumentDocumentDto): void {
        window.open(`/api/nonauth/document/document/${doc.idDocument}/download`, '_blank');
    }

    searchData(reset: boolean = false): void {
        if (reset) {
            this.pageIndex = 1
        }
        this.loading = true
        this.documentService.documentControllerFindAll(
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
                this.totalData.next(this.total)
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
        this.sortKey = (this.currentSort && this.currentSort.key) || "created_at";
        this.sortValue = (this.currentSort && this.currentSort.value) || "asc";
        this.searchData();
    }

    add() {
        if (!this.acl.can("client", 'can_add')) {
            return
        }
        const drawerRef = this.drawerService.create<UploadDrawerComponent, {
        }, string>({
            nzTitle: 'Add',
            nzContent: UploadDrawerComponent,
            nzWidth: (500) + 'px',
            nzContentParams: {
                forModule: this.forModule,
                forModuleId: this.forModuleId,
                enableCrud: this.enableCrud
            }
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.searchData()
            this.reload.next(data)
        });
    }



    delete(data: DocumentDocumentDto) {
        this.loading = true
        this.documentService.documentControllerRemove({ id: data.idDocument }).subscribe(
            data => {
                this.searchData();
                this.notify.error('Berhasil', 'Dihapus.');
            }
        )
    }
}
