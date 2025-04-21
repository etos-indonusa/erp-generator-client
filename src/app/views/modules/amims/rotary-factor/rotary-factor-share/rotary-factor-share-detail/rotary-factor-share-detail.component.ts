import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsRotaryFactorReportDto } from 'src/sdk/core/models';
import { RotaryFactorReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-rotary-factor-share-detail',
    templateUrl: './rotary-factor-share-detail.component.html',
    styleUrl: './rotary-factor-share-detail.component.scss'
})
export class RotaryFactorShareDetailComponent { 
    @Input('idRotaryFactor') idRotaryFactor: string // replace dengan id+Nama
    constructor(
        private rotaryFactorReportService: RotaryFactorReportService,

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
    rotaryFactor: AmimsRotaryFactorReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.rotaryFactorReportService.rotaryFactorReportControllerFindOne({ id: this.idRotaryFactor }).subscribe(
            data => {
                this.rotaryFactor = data.data || null;
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
    let url = environment.srv_document + '/pdf/rotaryFactor/' + this.idRotaryFactor + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
