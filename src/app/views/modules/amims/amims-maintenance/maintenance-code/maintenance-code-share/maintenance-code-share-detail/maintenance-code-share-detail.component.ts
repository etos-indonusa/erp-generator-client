import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsMaintenanceCodeReportDto } from 'de-sdk-core';
import { MaintenanceCodeReportService } from 'de-sdk-core';
import { MaintenanceCodeShareAddComponent } from '../maintenance-code-share-add/maintenance-code-share-add.component';

@Component({
    selector: 'app-maintenance-code-share-detail',
    templateUrl: './maintenance-code-share-detail.component.html',
    styleUrl: './maintenance-code-share-detail.component.scss'
})
export class MaintenanceCodeShareDetailComponent { 
    @Input('idMaintenanceCode') idMaintenanceCode: string // replace dengan id+Nama
    constructor(
        private maintenanceCodeReportService: MaintenanceCodeReportService,

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
    maintenanceCode: AmimsMaintenanceCodeReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.maintenanceCodeReportService.maintenanceCodeReportControllerFindOne({ id: this.idMaintenanceCode }).subscribe(
            data => {
                this.maintenanceCode = data.data || null;
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
    const drawerRef = this.drawerService.create <MaintenanceCodeShareAddComponent, {}, string > ({
        nzTitle: 'Detail',
        nzContent: MaintenanceCodeShareAddComponent,
        nzWidth: (500) + 'px',
            nzContentParams: {
                maintenanceCode: this.maintenanceCode || undefined
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
    let url = environment.srv_document + '/pdf/maintenanceCode/' + this.idMaintenanceCode + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
