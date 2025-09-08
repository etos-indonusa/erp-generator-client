import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsUnscheduleMaintenanceReportDto } from 'de-sdk-core';
import { UnscheduleMaintenanceReportService } from 'de-sdk-core';
import { UnscheduleMaintenanceShareAddComponent } from '../unschedule-maintenance-share-add/unschedule-maintenance-share-add.component';

@Component({
    selector: 'app-unschedule-maintenance-share-detail',
    templateUrl: './unschedule-maintenance-share-detail.component.html',
    styleUrl: './unschedule-maintenance-share-detail.component.scss'
})
export class UnscheduleMaintenanceShareDetailComponent { 
    @Input('idUnscheduleMaintenance') idUnscheduleMaintenance: string // replace dengan id+Nama
    constructor(
        private unscheduleMaintenanceReportService: UnscheduleMaintenanceReportService,

        private acl: AclService,
        private drawerService: NzDrawerService,
        private cd: ChangeDetectorRef,
        private tokenService: TokenService,

        /* tambahkan disnini untuk sub lainnya */
        /* tambahkan disnini untuk sub lainnya */
    ) { }

    ngOnInit() {
        this.getData();
    }
    reload = 0;
    is_loading: boolean = false;
    unscheduleMaintenance: AmimsUnscheduleMaintenanceReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.unscheduleMaintenanceReportService.unscheduleMaintenanceReportControllerFindOne({ id: this.idUnscheduleMaintenance }).subscribe(
            data => {
                this.unscheduleMaintenance = data.data || null;
                this.is_loading = false;
                this.reload++
                this.cd.detectChanges(); // force change detection to update the view
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
    update()
    {
    const drawerRef = this.drawerService.create <UnscheduleMaintenanceShareAddComponent, {}, string > ({
        nzTitle: 'Detail',
        nzContent: UnscheduleMaintenanceShareAddComponent,
        nzWidth: (500) + 'px',
            nzContentParams: {
                unscheduleMaintenance: this.unscheduleMaintenance || undefined
    }
});

drawerRef.afterClose.subscribe(() => {
    this.getData();
});
    }

    // handleApprovalSubmit(event: { status: 'approve' | 'reject', note: string }) {
    //     console.log('✔ Approval submitted:', event);
    // }

    // refreshApprovalSteps() {
    //     console.log('🔁 Refreshing approval widget...');
    //     // nanti bisa refresh steps/log, kalau sudah connect ke backend
    // }

    print() {
    let url = environment.srv_document + '/pdf/unscheduleMaintenance/' + this.idUnscheduleMaintenance + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
