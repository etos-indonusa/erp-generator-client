import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPurPrReportDto } from 'src/sdk/core/models';
import { PurPrReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-pur-pr-share-detail',
    templateUrl: './pur-pr-share-detail.component.html',
    styleUrl: './pur-pr-share-detail.component.scss'
})
export class PurPrShareDetailComponent { 
    @Input('idPurPr') idPurPr: string // replace dengan id+Nama
    constructor(
        private purPrReportService: PurPrReportService,

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
    purPr: AmimsPurPrReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.purPrReportService.purPrReportControllerFindOne({ id: this.idPurPr }).subscribe(
            data => {
                this.purPr = data.data || null;
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
    let url = environment.srv_document + '/pdf/purPr/' + this.idPurPr + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
