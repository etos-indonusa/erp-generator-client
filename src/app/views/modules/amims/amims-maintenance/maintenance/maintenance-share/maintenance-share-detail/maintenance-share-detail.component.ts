import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsMaintenanceReportDto } from 'de-sdk-core';
import { MaintenanceReportService } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-share-detail',
    templateUrl: './maintenance-share-detail.component.html',
    styleUrl: './maintenance-share-detail.component.scss'
})
export class MaintenanceShareDetailComponent { 
    @Input('idMaintenance') idMaintenance: string // replace dengan id+Nama
    constructor(
        private maintenanceReportService: MaintenanceReportService,

        private acl: AclService,
        private drawerService: NzDrawerService,
        private tokenService: TokenService,

        /* tambahkan disnini untuk sub lainnya */
        /* tambahkan disnini untuk sub lainnya */
    ) { }

    ngOnInit() {
        this.getData();
    }
    reload = 0;
    is_loading: boolean = false;
    maintenance: AmimsMaintenanceReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.maintenanceReportService.maintenanceReportControllerFindOne({ id: this.idMaintenance }).subscribe(
            data => {
                this.maintenance = data.data || null;
                this.is_loading = false;
                this.reload++
            },
            err => {
                this.is_loading = false;
            }
        )
    }

    // artinya one to many 
    getListData()
    {

    }

    // handleApprovalSubmit(event: { status: 'approve' | 'reject', note: string }) {
    //     console.log('✔ Approval submitted:', event);
    // }

    // refreshApprovalSteps() {
    //     console.log('🔁 Refreshing approval widget...');
    //     // nanti bisa refresh steps/log, kalau sudah connect ke backend
    // }

    print() {
    let url = environment.srv_document + '/pdf/maintenance/' + this.idMaintenance + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
