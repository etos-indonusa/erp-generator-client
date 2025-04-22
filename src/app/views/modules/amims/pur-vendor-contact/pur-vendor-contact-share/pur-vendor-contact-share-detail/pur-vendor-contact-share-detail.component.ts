import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPurVendorContactReportDto } from 'de-sdk-core/models';
import { PurVendorContactReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-pur-vendor-contact-share-detail',
    templateUrl: './pur-vendor-contact-share-detail.component.html',
    styleUrl: './pur-vendor-contact-share-detail.component.scss'
})
export class PurVendorContactShareDetailComponent { 
    @Input('idPurVendorContact') idPurVendorContact: string // replace dengan id+Nama
    constructor(
        private purVendorContactReportService: PurVendorContactReportService,

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
    purVendorContact: AmimsPurVendorContactReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.purVendorContactReportService.purVendorContactReportControllerFindOne({ id: this.idPurVendorContact }).subscribe(
            data => {
                this.purVendorContact = data.data || null;
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
    let url = environment.srv_document + '/pdf/purVendorContact/' + this.idPurVendorContact + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
