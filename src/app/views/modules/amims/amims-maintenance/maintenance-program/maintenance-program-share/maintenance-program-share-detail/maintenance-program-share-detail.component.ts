import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsMaintenanceProgramReportDto } from 'de-sdk-core';
import { MaintenanceProgramReportService } from 'de-sdk-core';
import { MaintenanceProgramShareAddComponent } from '../maintenance-program-share-add/maintenance-program-share-add.component';

@Component({
    selector: 'app-maintenance-program-share-detail',
    templateUrl: './maintenance-program-share-detail.component.html',
    styleUrl: './maintenance-program-share-detail.component.scss'
})
export class MaintenanceProgramShareDetailComponent { 
    @Input('idMaintenanceProgram') idMaintenanceProgram: string // replace dengan id+Nama
    constructor(
        private maintenanceProgramReportService: MaintenanceProgramReportService,

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
    maintenanceProgram: AmimsMaintenanceProgramReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.maintenanceProgramReportService.maintenanceProgramReportControllerFindOne({ id: this.idMaintenanceProgram }).subscribe(
            data => {
                this.maintenanceProgram = data.data || null;
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
    const drawerRef = this.drawerService.create <MaintenanceProgramShareAddComponent, {}, string > ({
        nzTitle: 'Detail',
        nzContent: MaintenanceProgramShareAddComponent,
        nzWidth: (500) + 'px',
            nzContentParams: {
                maintenanceProgram: this.maintenanceProgram || undefined
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
    let url = environment.srv_document + '/pdf/maintenanceProgram/' + this.idMaintenanceProgram + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
