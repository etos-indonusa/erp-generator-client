import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsQaRpdReportDto } from 'de-sdk-core';
import { QaRpdReportService } from 'de-sdk-core';

@Component({
    selector: 'app-qa-rpd-share-detail',
    templateUrl: './qa-rpd-share-detail.component.html',
    styleUrl: './qa-rpd-share-detail.component.scss'
})
export class QaRpdShareDetailComponent { 
    @Input('idQaRpd') idQaRpd: string // replace dengan id+Nama
    constructor(
        private qaRpdReportService: QaRpdReportService,

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
    qaRpd: AmimsQaRpdReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.qaRpdReportService.qaRpdReportControllerFindOne({ id: this.idQaRpd }).subscribe(
            data => {
                this.qaRpd = data.data || null;
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
    let url = environment.srv_document + '/pdf/qaRpd/' + this.idQaRpd + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
