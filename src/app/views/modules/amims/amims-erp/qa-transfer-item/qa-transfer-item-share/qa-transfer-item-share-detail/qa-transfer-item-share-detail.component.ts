import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsQaTransferItemReportDto } from 'de-sdk-core';
import { QaTransferItemReportService } from 'de-sdk-core';

@Component({
    selector: 'app-qa-transfer-item-share-detail',
    templateUrl: './qa-transfer-item-share-detail.component.html',
    styleUrl: './qa-transfer-item-share-detail.component.scss'
})
export class QaTransferItemShareDetailComponent { 
    @Input('idQaTransferItem') idQaTransferItem: string // replace dengan id+Nama
    constructor(
        private qaTransferItemReportService: QaTransferItemReportService,

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
    qaTransferItem: AmimsQaTransferItemReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.qaTransferItemReportService.qaTransferItemReportControllerFindOne({ id: this.idQaTransferItem }).subscribe(
            data => {
                this.qaTransferItem = data.data || null;
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
    let url = environment.srv_document + '/pdf/qaTransferItem/' + this.idQaTransferItem + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
