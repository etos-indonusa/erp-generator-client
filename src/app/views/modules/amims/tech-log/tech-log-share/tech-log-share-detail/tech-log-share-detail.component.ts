import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsTechLogReportDto } from 'de-sdk-core/lib/models';
import { TechLogReportService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-tech-log-share-detail',
    templateUrl: './tech-log-share-detail.component.html',
    styleUrl: './tech-log-share-detail.component.scss'
})
export class TechLogShareDetailComponent { 
    @Input('idTechLog') idTechLog: string // replace dengan id+Nama
    constructor(
        private techLogReportService: TechLogReportService,

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
    techLog: AmimsTechLogReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.techLogReportService.techLogReportControllerFindOne({ id: this.idTechLog }).subscribe(
            data => {
                this.techLog = data.data || null;
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
    let url = environment.srv_document + '/pdf/techLog/' + this.idTechLog + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
