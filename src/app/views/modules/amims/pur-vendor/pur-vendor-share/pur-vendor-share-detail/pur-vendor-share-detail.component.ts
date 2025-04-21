import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPurVendorReportDto } from 'src/sdk/core/models';
import { PurVendorReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-pur-vendor-share-detail',
    templateUrl: './pur-vendor-share-detail.component.html',
    styleUrl: './pur-vendor-share-detail.component.scss'
})
export class PurVendorShareDetailComponent { 
    @Input('idPurVendor') idPurVendor: string // replace dengan id+Nama
    constructor(
        private purVendorReportService: PurVendorReportService,

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
    purVendor: AmimsPurVendorReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.purVendorReportService.purVendorReportControllerFindOne({ id: this.idPurVendor }).subscribe(
            data => {
                this.purVendor = data.data || null;
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
    let url = environment.srv_document + '/pdf/purVendor/' + this.idPurVendor + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
