import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPurReturnReportDto } from 'de-sdk-core';
import { PurReturnReportService } from 'de-sdk-core';

@Component({
    selector: 'app-pur-return-share-detail',
    templateUrl: './pur-return-share-detail.component.html',
    styleUrl: './pur-return-share-detail.component.scss'
})
export class PurReturnShareDetailComponent { 
    @Input('idPurReturn') idPurReturn: string // replace dengan id+Nama
    constructor(
        private purReturnReportService: PurReturnReportService,

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
    purReturn: AmimsPurReturnReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.purReturnReportService.purReturnReportControllerFindOne({ id: this.idPurReturn }).subscribe(
            data => {
                this.purReturn = data.data || null;
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
    let url = environment.srv_document + '/pdf/purReturn/' + this.idPurReturn + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
