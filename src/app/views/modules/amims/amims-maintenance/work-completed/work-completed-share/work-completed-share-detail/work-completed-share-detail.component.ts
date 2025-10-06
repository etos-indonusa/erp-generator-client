import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsWorkCompletedReportDto } from 'de-sdk-core';
import { WorkCompletedReportService } from 'de-sdk-core';
import { WorkCompletedShareAddComponent } from '../work-completed-share-add/work-completed-share-add.component';

@Component({
    selector: 'app-work-completed-share-detail',
    templateUrl: './work-completed-share-detail.component.html',
    styleUrl: './work-completed-share-detail.component.scss'
})
export class WorkCompletedShareDetailComponent { 
    @Input('idWorkCompleted') idWorkCompleted: string // replace dengan id+Nama
    constructor(
        private workCompletedReportService: WorkCompletedReportService,

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
    workCompleted: AmimsWorkCompletedReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.workCompletedReportService.workCompletedReportControllerFindOne({ id: this.idWorkCompleted }).subscribe(
            data => {
                this.workCompleted = data.data || null;
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
    const drawerRef = this.drawerService.create <WorkCompletedShareAddComponent, {}, string > ({
        nzTitle: 'Detail',
        nzContent: WorkCompletedShareAddComponent,
        nzWidth: (500) + 'px',
            nzContentParams: {
                workCompleted: this.workCompleted || undefined
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
    let url = environment.srv_document + '/pdf/workCompleted/' + this.idWorkCompleted + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
