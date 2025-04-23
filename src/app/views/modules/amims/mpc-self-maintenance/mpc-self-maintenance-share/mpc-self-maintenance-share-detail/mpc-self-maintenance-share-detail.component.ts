import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsMpcSelfMaintenanceReportDto } from 'de-sdk-core';
import { MpcSelfMaintenanceReportService } from 'de-sdk-core';

@Component({
    selector: 'app-mpc-self-maintenance-share-detail',
    templateUrl: './mpc-self-maintenance-share-detail.component.html',
    styleUrl: './mpc-self-maintenance-share-detail.component.scss'
})
export class MpcSelfMaintenanceShareDetailComponent { 
    @Input('idMpcSelfMaintenance') idMpcSelfMaintenance: string // replace dengan id+Nama
    constructor(
        private mpcSelfMaintenanceReportService: MpcSelfMaintenanceReportService,

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
    mpcSelfMaintenance: AmimsMpcSelfMaintenanceReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.mpcSelfMaintenanceReportService.mpcSelfMaintenanceReportControllerFindOne({ id: this.idMpcSelfMaintenance }).subscribe(
            data => {
                this.mpcSelfMaintenance = data.data || null;
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
    let url = environment.srv_document + '/pdf/mpcSelfMaintenance/' + this.idMpcSelfMaintenance + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
