import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsTechLogJoReportDto } from 'src/sdk/core/models';
import { TechLogJoReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-tech-log-jo-share-detail',
    templateUrl: './tech-log-jo-share-detail.component.html',
    styleUrl: './tech-log-jo-share-detail.component.scss'
})
export class TechLogJoShareDetailComponent { 
    @Input('idTechLogJo') idTechLogJo: string // replace dengan id+Nama
    constructor(
        private techLogJoReportService: TechLogJoReportService,

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
    techLogJo: AmimsTechLogJoReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.techLogJoReportService.techLogJoReportControllerFindOne({ id: this.idTechLogJo }).subscribe(
            data => {
                this.techLogJo = data.data || null;
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
    let url = environment.srv_document + '/pdf/techLogJo/' + this.idTechLogJo + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
