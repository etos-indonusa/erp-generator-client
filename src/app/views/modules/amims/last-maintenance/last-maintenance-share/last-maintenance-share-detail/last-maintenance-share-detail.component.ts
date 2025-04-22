import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsLastMaintenanceReportDto } from 'de-sdk-core/models';
import { LastMaintenanceReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-last-maintenance-share-detail',
    templateUrl: './last-maintenance-share-detail.component.html',
    styleUrl: './last-maintenance-share-detail.component.scss'
})
export class LastMaintenanceShareDetailComponent { 
    @Input('idLastMaintenance') idLastMaintenance: string // replace dengan id+Nama
    constructor(
        private lastMaintenanceReportService: LastMaintenanceReportService,

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
    lastMaintenance: AmimsLastMaintenanceReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.lastMaintenanceReportService.lastMaintenanceReportControllerFindOne({ id: this.idLastMaintenance }).subscribe(
            data => {
                this.lastMaintenance = data.data || null;
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
    let url = environment.srv_document + '/pdf/lastMaintenance/' + this.idLastMaintenance + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
