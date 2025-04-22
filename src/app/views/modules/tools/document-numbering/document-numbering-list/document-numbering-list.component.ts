import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { DocumentNumberingShareAddComponent } from '../document-numbering-share/document-numbering-share-add/document-numbering-share-add.component';
import { DocumentNumberingShareDetailComponent } from '../document-numbering-share/document-numbering-share-detail/document-numbering-share-detail.component';
import { TranslateService } from '@ngx-translate/core';
import { ToolsDocumentNumberingDto } from 'de-sdk-core/models/tools-document-numbering-dto';
import { DocumentNumberingService } from 'de-sdk-core/services/document-numbering.service';
import { ModuleService } from 'de-sdk-core/services';
@Component({
    selector: 'app-document-numbering-list',
    templateUrl: './document-numbering-list.component.html',
    styleUrl: './document-numbering-list.component.scss'
})
export class DocumentNumberingListComponent {
    @Input('for-module') for_module: any

    constructor(
        private drawerService: NzDrawerService,
        private acl: AclService,
        private cd: ChangeDetectorRef,
        private notify: NzNotificationService,
        private documentNumberingService: DocumentNumberingService,
        private moduleService: ModuleService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }
    module: any = {}
    ngOnInit(): void {
        this.resetParam();

        this.moduleService.moduleControllerFindOne({ id: this.for_module }).subscribe(
            data => {
                this.module = data.data
            }
        )
    }

    table_fileds = []

    filter: any = {}

    pageIndex = 1
    pageSize = 30
    total = 0
    listOfData: any[] = []
    loading = true
    sortValue: string | null = "asc"
    sortKey: string | null = "createdAt"
    search: string | null = null
    search_field: string[] = ["forModule", "formatNomor", "targetColumn", "targetTable"]

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

        this.filter.forModule = this.for_module

        this.loading = true
        this.documentNumberingService.documentNumberingControllerFindAll(
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
        if (!this.acl.can("documentNumbering", 'can_add')) {
            return
        }
        const drawerRef = this.drawerService.create<DocumentNumberingShareAddComponent, {
        }, string>({
            nzTitle: 'Add',
            nzContent: DocumentNumberingShareAddComponent,
            nzWidth: (500) + 'px',
            nzContentParams: {
                for_module: this.for_module,
                field: this.module.fields
            }
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.searchData()
        });
    }
    edit(data: ToolsDocumentNumberingDto) {
        if (!this.acl.can("mitra", 'can_edit')) {
            return
        }
        const drawerRef = this.drawerService.create<DocumentNumberingShareAddComponent, {
        }, {

        }>({
            nzTitle: 'Edit',
            nzContent: DocumentNumberingShareAddComponent,
            nzContentParams: {
                for_module: this.for_module,
                field: this.module.fields,
                documentNumbering: data
            },
            nzWidth: (window.innerWidth * 0.5) + 'px',
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.searchData()
            this.cd.detectChanges()
        });
    }


    delete(data: ToolsDocumentNumberingDto) {
        this.loading = true
        this.documentNumberingService.documentNumberingControllerRemove({ id: data.idDocumentNumbering }).subscribe(
            data => {
                this.searchData();
                this.notify.error('Berhasil', 'Dihapus.');
                this.cd.detectChanges()
            }
        )
    }

    detail(data: any) {
        if (!this.acl.can("mitra", 'can_list')) {
            return
        }

        const drawerRef = this.drawerService.create<DocumentNumberingShareDetailComponent, {
        }, {
            data: ToolsDocumentNumberingDto
        }>({
            nzTitle: 'Detail DocumentNumbering',
            nzContent: DocumentNumberingShareDetailComponent,
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
