import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsQaTransferReportDto } from 'de-sdk-core';
import { QaTransferReportService } from 'de-sdk-core';

@Component({
    selector: 'app-qa-transfer-share-detail',
    templateUrl: './qa-transfer-share-detail.component.html',
    styleUrl: './qa-transfer-share-detail.component.scss'
})
export class QaTransferShareDetailComponent { 
    @Input('idQaTransfer') idQaTransfer: string // replace dengan id+Nama
    constructor(
        private qaTransferReportService: QaTransferReportService,

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
    qaTransfer: AmimsQaTransferReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.qaTransferReportService.qaTransferReportControllerFindOne({ id: this.idQaTransfer }).subscribe(
            data => {
                this.qaTransfer = data.data || null;
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
    let url = environment.srv_document + '/pdf/qaTransfer/' + this.idQaTransfer + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
