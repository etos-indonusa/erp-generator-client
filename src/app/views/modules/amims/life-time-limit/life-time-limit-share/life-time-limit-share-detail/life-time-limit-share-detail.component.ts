import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsLifeTimeLimitReportDto } from 'de-sdk-core/models';
import { LifeTimeLimitReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-life-time-limit-share-detail',
    templateUrl: './life-time-limit-share-detail.component.html',
    styleUrl: './life-time-limit-share-detail.component.scss'
})
export class LifeTimeLimitShareDetailComponent { 
    @Input('idLifeTimeLimit') idLifeTimeLimit: string // replace dengan id+Nama
    constructor(
        private lifeTimeLimitReportService: LifeTimeLimitReportService,

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
    lifeTimeLimit: AmimsLifeTimeLimitReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.lifeTimeLimitReportService.lifeTimeLimitReportControllerFindOne({ id: this.idLifeTimeLimit }).subscribe(
            data => {
                this.lifeTimeLimit = data.data || null;
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
    let url = environment.srv_document + '/pdf/lifeTimeLimit/' + this.idLifeTimeLimit + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
