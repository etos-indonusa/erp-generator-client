import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { PesanService } from 'src/app/shared/services/pesan.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment.prod';
import { PartInstallOldReportService, PartInstallOldService } from 'de-sdk-core/lib/services';
import { AmimsPartInstallOldDto } from 'de-sdk-core/lib/models';
import { PartInstallOldShareAddComponent } from '../part-install-old-share-add/part-install-old-share-add.component';
import { PartInstallOldShareDetailComponent } from '../part-install-old-share-detail/part-install-old-share-detail.component';
import { AircraftService } from 'de-sdk-core/lib/services';
import { EngineerPrisItemService } from 'de-sdk-core/lib/services';
import { PartService } from 'de-sdk-core/lib/services';
import { PartInstallService } from 'de-sdk-core/lib/services';
 


@Component({
    selector: 'app-part-install-old-share-list',
    templateUrl: './part-install-old-share-list.component.html',
    styleUrl: './part-install-old-share-list.component.scss'
})
export class PartInstallOldShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
     
    @Input('idAircraft') idAircraft: string | null  = null;
     
    @Input('idEngineerPrisItem') idEngineerPrisItem: string | null  = null;
     
    @Input('idPart') idPart: string | null  = null;
     
    @Input('idPartInstall') idPartInstall: string | null  = null;
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private partInstallOldReportService: PartInstallOldReportService,
        private partInstallOldService: PartInstallOldService,
        private tokenService: TokenService,

                        private aircraftService: AircraftService,
                private engineerPrisItemService: EngineerPrisItemService,
                private partService: PartService,
                private partInstallService: PartInstallService,
                        private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_partInstallOld = this.status == 'semua' ? null : this.status;

            
           
            if (changes.idAircraft)
            {
                this.filterAircraft.idAircraft = this.idAircraft
            }
            
           
            if (changes.idEngineerPrisItem)
            {
                this.filterEngineerPrisItem.idEngineerPrisItem = this.idEngineerPrisItem
            }
            
           
            if (changes.idPart)
            {
                this.filterPart.idPart = this.idPart
            }
            
           
            if (changes.idPartInstall)
            {
                this.filterPartInstall.idPartInstall = this.idPartInstall
            }
            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

                            this.getAllAircraft();
                    this.getAllEngineerPrisItem();
                    this.getAllPart();
                    this.getAllPartInstall();
                    }

    
    listAircraft: any[] = []; 
    
    listEngineerPrisItem: any[] = []; 
    
    listPart: any[] = []; 
    
    listPartInstall: any[] = []; 
    
    //untuak filter dari prent
    
    filterAircraft:any = {} 
    
    filterEngineerPrisItem:any = {} 
    
    filterPart:any = {} 
    
    filterPartInstall:any = {} 
    

    // untuk fungsi get ALL relation
            getAllAircraft() {
    this.aircraftService.aircraftControllerFindAll().subscribe(
      data => this.listAircraft = data.data ?? []
    );
  }
        getAllEngineerPrisItem() {
    this.engineerPrisItemService.engineerPrisItemControllerFindAll().subscribe(
      data => this.listEngineerPrisItem = data.data ?? []
    );
  }
        getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        getAllPartInstall() {
    this.partInstallService.partInstallControllerFindAll().subscribe(
      data => this.listPartInstall = data.data ?? []
    );
  }
        
    currentUser: any = {};
    filter: any = {
    dateInstallRange: null,
  dueOverhaulCMin: null,
  dueOverhaulCMax: null,
  dueOverhaulHMin: null,
  dueOverhaulHMax: null,
  dueOverhaulValueMin: null,
  dueOverhaulValueMax: null,
  idAircraft: null,
  idEngineerPrisItem: null,
  idPart: null,
  idPartInstall: null,
  installedInspectionCMin: null,
  installedInspectionCMax: null,
  installedInspectionHMin: null,
  installedInspectionHMax: null,
  installedInspectionValueMin: null,
  installedInspectionValueMax: null,
  installedOverhaulCMin: null,
  installedOverhaulCMax: null,
  installedOverhaulHMin: null,
  installedOverhaulHMax: null,
  installedOverhaulValueMin: null,
  installedOverhaulValueMax: null,
  isfeatured: null,
  qtyInstallMin: null,
  qtyInstallMax: null
    };
 
    expandSet = new Set<string>();
    onExpandChange(id: string, checked: boolean): void {
        if (checked) {
            this.expandSet.add(id);
        } else {
            this.expandSet.delete(id);
        }
    }

    pageIndex = 1;
    pageSize = 30;
    total = 0;
    listOfData: any[] = [];
    loading = true;
    sortValue: string | null = 'asc';
    sortKey: string | null = 'created_at';
    search: string | null = null;
    search_field: string[] = ["bin","figureIndex","isfeatured","itemIndex","oldId","parent"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            dateInstallRange: null,
  dueOverhaulCMin: null,
  dueOverhaulCMax: null,
  dueOverhaulHMin: null,
  dueOverhaulHMax: null,
  dueOverhaulValueMin: null,
  dueOverhaulValueMax: null,
  idAircraft: null,
  idEngineerPrisItem: null,
  idPart: null,
  idPartInstall: null,
  installedInspectionCMin: null,
  installedInspectionCMax: null,
  installedInspectionHMin: null,
  installedInspectionHMax: null,
  installedInspectionValueMin: null,
  installedInspectionValueMax: null,
  installedOverhaulCMin: null,
  installedOverhaulCMax: null,
  installedOverhaulHMin: null,
  installedOverhaulHMax: null,
  installedOverhaulValueMin: null,
  installedOverhaulValueMax: null,
  isfeatured: null,
  qtyInstallMin: null,
  qtyInstallMax: null
        };
        this.filter.status_partInstallOld = this.status == 'semua' ? null : this.status;
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
        if (reset) this.pageIndex = 1;
        this.loading = true;

        const finalFilter: any = this.buildFilterForBackend(this.filter);
        finalFilter[`id_part_install_old`] = { isNotNull: 'aktif' };

        this.partInstallOldReportService.partInstallOldReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        {
                        "aircraft": this.filterAircraft, type: 'inner'
                    },
                                        {
                        "engineer_pris_item": this.filterEngineerPrisItem, type: 'inner'
                    },
                                        {
                        "part": this.filterPart, type: 'inner'
                    },
                                        {
                        "part_install": this.filterPartInstall, type: 'inner'
                    }
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [
  {
    "name": "aircraft",
    "type": "single"
  },
  {
    "name": "engineer_pris_item",
    "type": "single"
  },
  {
    "name": "part",
    "type": "single"
  },
  {
    "name": "part_install",
    "type": "single"
  }
],
                sortKey: this.sortKey ?? undefined,
                sortValue: this.validSortValue,
                pageIndex: this.pageIndex,
                pageSize: this.pageSize
            }
        }).subscribe(data => {
            this.loading = false;
            this.total = data.total || 0;
            this.listOfData = data.data || [];
        }, err => {
            this.loading = false;
        });
    }

    currentSort: any = {};
    onQueryParamsChange(params: NzTableQueryParams): void {
        this.pageIndex = params.pageIndex;
        this.pageSize = params.pageSize;
        this.currentSort = params.sort.find(item => item.value !== null);
        this.sortKey = (this.currentSort && this.currentSort.key) || 'created_at';
        this.sortValue = (this.currentSort && this.currentSort.value) || 'asc';
        this.searchData();
    }

    buildFilterForBackend(filter: any): any {
        const backendFilter: any = {};
        for (const key of Object.keys(filter)) {
            const val = filter[key];
            if (val == null || val === '') continue;

            if (key.endsWith('Min')) {
                const field = key.replace(/Min$/, '');
                backendFilter[field] = backendFilter[field] || {};
                backendFilter[field].gte = val;
            } else if (key.endsWith('Max')) {
                const field = key.replace(/Max$/, '');
                backendFilter[field] = backendFilter[field] || {};
                backendFilter[field].lte = val;
            } else if (key.endsWith('Range') && Array.isArray(val)) {
                const field = key.replace(/Range$/, '');
                backendFilter[field] = {
                    between: val
                };
            } else {
                backendFilter[key] = val;
            }
        }

        return backendFilter;
    }

     // TABLE DINAMIS 
    columns = [ 
         { key: 'bin',  show: true },
              { key: 'createdAt',  show: true },
              { key: 'dateInstall',  show: true },
              { key: 'dueOverhaulC',  show: true },
              { key: 'dueOverhaulH',  show: true },
              { key: 'dueOverhaulValue',  show: true },
              { key: 'figureIndex',  show: true },
              { key: 'installedInspectionC',  show: true },
              { key: 'installedInspectionH',  show: true },
              { key: 'installedInspectionValue',  show: true },
              { key: 'installedOverhaulC',  show: true },
              { key: 'installedOverhaulH',  show: true },
              { key: 'installedOverhaulValue',  show: true },
              { key: 'isfeatured',  show: true },
              { key: 'itemIndex',  show: true },
              { key: 'oldId',  show: true },
              { key: 'parent',  show: true },
              { key: 'qtyInstall',  show: true },
              { key: 'statusInstall',  show: true },
              { key: 'updatedAt',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('partInstallOld_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('partInstallOld_columns');
        if (saved) {
            try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
                // Sinkronkan dengan default jika ada key yang hilang
                this.columns.forEach((col, index) => {
                const found = parsed.find((p: any) => p.key === col.key);
                if (found) this.columns[index].show = found.show;
                });
            }
            } catch (e) {
                console.warn('Gagal parse partInstallOld dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('part-install-old', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<PartInstallOldShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: PartInstallOldShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsPartInstallOldDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<PartInstallOldShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: PartInstallOldShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idPartInstallOld:data.idPartInstallOld
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

    update(data: any) {}
    delete(id: string) {} 

    print() {
        let url = environment.srv_document + '/pdfAkutansi/vouchers?filter=' + JSON.stringify(this.filter) + '&token=' + this.tokenService.getToken();
        window.open(url, '_blank');
    }
}