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
import { AircraftDetailReportService, AircraftDetailService } from 'de-sdk-core/lib/services';
import { AmimsAircraftDetailDto } from 'de-sdk-core/lib/models';
import { AircraftDetailShareAddComponent } from '../aircraft-detail-share-add/aircraft-detail-share-add.component';
import { AircraftDetailShareDetailComponent } from '../aircraft-detail-share-detail/aircraft-detail-share-detail.component';
 


@Component({
    selector: 'app-aircraft-detail-share-list',
    templateUrl: './aircraft-detail-share-list.component.html',
    styleUrl: './aircraft-detail-share-list.component.scss'
})
export class AircraftDetailShareListComponent {
    @Input('status') status: string | null = null;
    @Output('out_filter') out_filter = new EventEmitter<any>();
    @Input('filter-extra') filter_extra = false;
    @Input('enable-crud') enable_crud = true;
    //untuak filter dari prent
    

    constructor(
        private pesanService: PesanService,
        private drawerService: NzDrawerService,
        private acl: AclService,
        private router: Router,
        private userInfoService: UserInfoService,
        private aircraftDetailReportService: AircraftDetailReportService,
        private aircraftDetailService: AircraftDetailService,
        private tokenService: TokenService,

                private translate: TranslateService
    ) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filter.status_aircraftDetail = this.status == 'semua' ? null : this.status;

            
        

        this.searchData();
    }

    ngOnInit(): void {
        this.currentUser = this.userInfoService.getUser;
        this.resetParam();
        this.loadColumnSettings();

            }

    
    //untuak filter dari prent
    

    // untuk fungsi get ALL relation
    
    currentUser: any = {};
    filter: any = {
    
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
    search_field: string[] = ["airworthiness","autoPilot","auxiliaryTank","baggageCompartmentSpace","cargoAreaMaximumHeight","cargoAreaOverallLength","cargoDoor","certificateOfRegistration","compassSwing","configuration","crew","crewDoor","crewLifeVest","cvr","dme","dualAdfSystem","dualRadioNavigationSystem","dualVhfCommunication","earProtector","emergency","emergencyFloatationGear","emergencyLocateTransmitter","emptyWeight","engine","engineInstrument","externalCargoHook","firstAidKit","flightControl","flightDirector","floatingBeacon","fullDoc","gps","grossWeight","gyroMagneticCompass","hfCommunication","homer","hoverCeilingOge","intercommunicationSystem","internalHoist","landingGear","landingLight","lifeRaft","lifeVest","mainCabinSpace","mainRotorDiscDiameter","mainRotorSystem","maximumBaggageCompartment","maximumContinuous","maximumSpeed","medicalStretcher","minute","moreDetail","outputPower","passenger","passengerDoorHeight","passengerDoorWidth","payload","personal","poweredBy","publicAddress","radioAltimeter","radioPermit","range","searchLight","standardFuelCapacity","survivalKit","tailRotorDiameter","tailRotorSystem","takeOff","transponder","underwaterBeacon","usefulWeight","vor","weightAndBalance","withFullPassenger","wxRadar","yearOfManufacture"];
 
    breadCrumbItems = [{ label: 'List', active: false }];

    resetParam() {
        this.pageIndex = 1;
        this.pageSize = 30;
        this.sortValue = 'asc';
        this.sortKey = 'created_at';
        this.search = null;
        this.filter = {
            
        };
        this.filter.status_aircraftDetail = this.status == 'semua' ? null : this.status;
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
        finalFilter[`id_aircraft_detail`] = { isNotNull: 'aktif' };

        this.aircraftDetailReportService.aircraftDetailReportControllerFindAll({
            body: {
                filter: finalFilter,
                joinWhere: [
                                        ],
                search_field: this.search_field,
                search_keyword: this.search || undefined,
                include:  [],
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
         { key: 'airworthiness',  show: true },
              { key: 'autoPilot',  show: true },
              { key: 'auxiliaryTank',  show: true },
              { key: 'baggageCompartmentSpace',  show: true },
              { key: 'cargoAreaMaximumHeight',  show: true },
              { key: 'cargoAreaOverallLength',  show: true },
              { key: 'cargoDoor',  show: true },
              { key: 'certificateOfRegistration',  show: true },
              { key: 'compassSwing',  show: true },
              { key: 'configuration',  show: true },
              { key: 'crew',  show: true },
              { key: 'crewDoor',  show: true },
              { key: 'crewLifeVest',  show: true },
              { key: 'cvr',  show: true },
              { key: 'dme',  show: true },
              { key: 'dualAdfSystem',  show: true },
              { key: 'dualRadioNavigationSystem',  show: true },
              { key: 'dualVhfCommunication',  show: true },
              { key: 'earProtector',  show: true },
              { key: 'emergency',  show: true },
              { key: 'emergencyFloatationGear',  show: true },
              { key: 'emergencyLocateTransmitter',  show: true },
              { key: 'emptyWeight',  show: true },
              { key: 'engine',  show: true },
              { key: 'engineInstrument',  show: true },
              { key: 'externalCargoHook',  show: true },
              { key: 'firstAidKit',  show: true },
              { key: 'flightControl',  show: true },
              { key: 'flightDirector',  show: true },
              { key: 'floatingBeacon',  show: true },
              { key: 'fullDoc',  show: true },
              { key: 'gps',  show: true },
              { key: 'grossWeight',  show: true },
              { key: 'gyroMagneticCompass',  show: true },
              { key: 'hfCommunication',  show: true },
              { key: 'homer',  show: true },
              { key: 'hoverCeilingOge',  show: true },
              { key: 'intercommunicationSystem',  show: true },
              { key: 'internalHoist',  show: true },
              { key: 'landingGear',  show: true },
              { key: 'landingLight',  show: true },
              { key: 'lifeRaft',  show: true },
              { key: 'lifeVest',  show: true },
              { key: 'mainCabinSpace',  show: true },
              { key: 'mainRotorDiscDiameter',  show: true },
              { key: 'mainRotorSystem',  show: true },
              { key: 'maximumBaggageCompartment',  show: true },
              { key: 'maximumContinuous',  show: true },
              { key: 'maximumSpeed',  show: true },
              { key: 'medicalStretcher',  show: true },
              { key: 'minute',  show: true },
              { key: 'moreDetail',  show: true },
              { key: 'outputPower',  show: true },
              { key: 'passenger',  show: true },
              { key: 'passengerDoorHeight',  show: true },
              { key: 'passengerDoorWidth',  show: true },
              { key: 'payload',  show: true },
              { key: 'personal',  show: true },
              { key: 'poweredBy',  show: true },
              { key: 'publicAddress',  show: true },
              { key: 'radioAltimeter',  show: true },
              { key: 'radioPermit',  show: true },
              { key: 'range',  show: true },
              { key: 'searchLight',  show: true },
              { key: 'standardFuelCapacity',  show: true },
              { key: 'survivalKit',  show: true },
              { key: 'tailRotorDiameter',  show: true },
              { key: 'tailRotorSystem',  show: true },
              { key: 'takeOff',  show: true },
              { key: 'transponder',  show: true },
              { key: 'underwaterBeacon',  show: true },
              { key: 'updatedAt',  show: true },
              { key: 'usefulWeight',  show: true },
              { key: 'vor',  show: true },
              { key: 'weightAndBalance',  show: true },
              { key: 'withFullPassenger',  show: true },
              { key: 'wxRadar',  show: true },
              { key: 'yearOfManufacture',  show: true },
             
    ];

    isColVisible(key: string): boolean {
        return this.columns.find(col => col.key === key)?.show ?? true;
    }
    onColumnToggle(): void {
        localStorage.setItem('aircraftDetail_columns', JSON.stringify(this.columns));
    }

    resetColumns(): void {
        this.columns.forEach(col => col.show = true);
        this.onColumnToggle();
    }
    loadColumnSettings(): void {
        const saved = localStorage.getItem('aircraftDetail_columns');
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
                console.warn('Gagal parse aircraftDetail dari localStorage', e);
            }
        }
        }
    // TABLE DINAMIS 


    add() {
    if (!this.acl.can('aircraft-detail', 'can_add') || !this.enable_crud) return;

        const drawerRef = this.drawerService.create<AircraftDetailShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: AircraftDetailShareAddComponent,
        nzWidth: (500) + 'px',
        });
 
        drawerRef.afterClose.subscribe(() => {
            this.searchData();
        });
    }

     

    detail(data:AmimsAircraftDetailDto) {
        if (!this.acl.can('contract-site', 'can_list')) return;

        const drawerRef = this.drawerService.create<AircraftDetailShareDetailComponent, {}, string>({
            nzTitle: 'Detail',
            nzContent: AircraftDetailShareDetailComponent,
            nzWidth: (window.innerWidth * 0.8) + 'px',
            nzContentParams:{
                idAircraftDetail:data.idAircraftDetail
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