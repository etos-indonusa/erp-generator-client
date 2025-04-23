import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPurVendorItemReportDto } from 'de-sdk-core/lib/models';
import { PurVendorItemReportService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-pur-vendor-item-share-detail',
    templateUrl: './pur-vendor-item-share-detail.component.html',
    styleUrl: './pur-vendor-item-share-detail.component.scss'
})
export class PurVendorItemShareDetailComponent { 
    @Input('idPurVendorItem') idPurVendorItem: string // replace dengan id+Nama
    constructor(
        private purVendorItemReportService: PurVendorItemReportService,

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
    purVendorItem: AmimsPurVendorItemReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.purVendorItemReportService.purVendorItemReportControllerFindOne({ id: this.idPurVendorItem }).subscribe(
            data => {
                this.purVendorItem = data.data || null;
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
    let url = environment.srv_document + '/pdf/purVendorItem/' + this.idPurVendorItem + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
