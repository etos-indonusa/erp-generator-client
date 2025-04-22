import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPartLogReportDto } from 'de-sdk-core/models';
import { PartLogReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-part-log-share-detail',
    templateUrl: './part-log-share-detail.component.html',
    styleUrl: './part-log-share-detail.component.scss'
})
export class PartLogShareDetailComponent { 
    @Input('idPartLog') idPartLog: string // replace dengan id+Nama
    constructor(
        private partLogReportService: PartLogReportService,

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
    partLog: AmimsPartLogReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.partLogReportService.partLogReportControllerFindOne({ id: this.idPartLog }).subscribe(
            data => {
                this.partLog = data.data || null;
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
    let url = environment.srv_document + '/pdf/partLog/' + this.idPartLog + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
