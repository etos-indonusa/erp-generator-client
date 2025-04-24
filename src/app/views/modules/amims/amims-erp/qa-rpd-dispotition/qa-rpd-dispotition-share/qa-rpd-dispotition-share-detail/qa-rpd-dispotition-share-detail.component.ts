import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsQaRpdDispotitionReportDto } from 'de-sdk-core';
import { QaRpdDispotitionReportService } from 'de-sdk-core';

@Component({
    selector: 'app-qa-rpd-dispotition-share-detail',
    templateUrl: './qa-rpd-dispotition-share-detail.component.html',
    styleUrl: './qa-rpd-dispotition-share-detail.component.scss'
})
export class QaRpdDispotitionShareDetailComponent { 
    @Input('idQaRpdDispotition') idQaRpdDispotition: string // replace dengan id+Nama
    constructor(
        private qaRpdDispotitionReportService: QaRpdDispotitionReportService,

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
    qaRpdDispotition: AmimsQaRpdDispotitionReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.qaRpdDispotitionReportService.qaRpdDispotitionReportControllerFindOne({ id: this.idQaRpdDispotition }).subscribe(
            data => {
                this.qaRpdDispotition = data.data || null;
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
    let url = environment.srv_document + '/pdf/qaRpdDispotition/' + this.idQaRpdDispotition + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
