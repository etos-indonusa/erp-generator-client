import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsVDueListOutputReportDto } from 'de-sdk-core';
import { VDueListOutputReportService } from 'de-sdk-core';
import { VDueListOutputShareAddComponent } from '../v-due-list-output-share-add/v-due-list-output-share-add.component';

@Component({
    selector: 'app-v-due-list-output-share-detail',
    templateUrl: './v-due-list-output-share-detail.component.html',
    styleUrl: './v-due-list-output-share-detail.component.scss'
})
export class VDueListOutputShareDetailComponent { 
    @Input('idDueListOutput') idDueListOutput: string // replace dengan id+Nama
    constructor(
        private vDueListOutputReportService: VDueListOutputReportService,

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
    vDueListOutput: AmimsVDueListOutputReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.vDueListOutputReportService.vDueListOutputReportControllerFindOne({ id: this.idDueListOutput }).subscribe(
            data => {
                this.vDueListOutput = data.data || null;
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
    const drawerRef = this.drawerService.create <VDueListOutputShareAddComponent, {}, string > ({
        nzTitle: 'Detail',
        nzContent: VDueListOutputShareAddComponent,
        nzWidth: (500) + 'px',
            nzContentParams: {
                vDueListOutput: this.vDueListOutput || undefined
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
    let url = environment.srv_document + '/pdf/vDueListOutput/' + this.idDueListOutput + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
