import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPurPrclReportDto } from 'de-sdk-core/lib/models';
import { PurPrclReportService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-pur-prcl-share-detail',
    templateUrl: './pur-prcl-share-detail.component.html',
    styleUrl: './pur-prcl-share-detail.component.scss'
})
export class PurPrclShareDetailComponent { 
    @Input('idPurPrcl') idPurPrcl: string // replace dengan id+Nama
    constructor(
        private purPrclReportService: PurPrclReportService,

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
    purPrcl: AmimsPurPrclReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.purPrclReportService.purPrclReportControllerFindOne({ id: this.idPurPrcl }).subscribe(
            data => {
                this.purPrcl = data.data || null;
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
    let url = environment.srv_document + '/pdf/purPrcl/' + this.idPurPrcl + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
