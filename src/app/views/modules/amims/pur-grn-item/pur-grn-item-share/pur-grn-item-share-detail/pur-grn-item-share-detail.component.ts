import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPurGrnItemReportDto } from 'src/sdk/core/models';
import { PurGrnItemReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-pur-grn-item-share-detail',
    templateUrl: './pur-grn-item-share-detail.component.html',
    styleUrl: './pur-grn-item-share-detail.component.scss'
})
export class PurGrnItemShareDetailComponent { 
    @Input('idPurGrnItem') idPurGrnItem: string // replace dengan id+Nama
    constructor(
        private purGrnItemReportService: PurGrnItemReportService,

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
    purGrnItem: AmimsPurGrnItemReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.purGrnItemReportService.purGrnItemReportControllerFindOne({ id: this.idPurGrnItem }).subscribe(
            data => {
                this.purGrnItem = data.data || null;
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
    let url = environment.srv_document + '/pdf/purGrnItem/' + this.idPurGrnItem + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
