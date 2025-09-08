import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsMaintenanceReportDto } from 'de-sdk-core';
import { MaintenanceReportService } from 'de-sdk-core';
import { MaintenanceShareAddComponent } from '../maintenance-share-add/maintenance-share-add.component';

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
    maintenance: any | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.maintenanceReportService.maintenanceReportControllerFindOne({ id: this.idMaintenance }).subscribe(
            data => {
                this.maintenance = data.data || null;
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
    const drawerRef = this.drawerService.create <MaintenanceShareAddComponent, {}, string > ({
        nzTitle: 'Detail',
        nzContent: MaintenanceShareAddComponent,
        nzWidth: (500) + 'px',
            nzContentParams: {
                maintenance: this.maintenance || undefined
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
    let url = environment.srv_document + '/pdf/maintenance/' + this.idMaintenance + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
