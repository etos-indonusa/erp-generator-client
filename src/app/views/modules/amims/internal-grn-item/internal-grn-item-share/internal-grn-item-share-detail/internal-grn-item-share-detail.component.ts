import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsInternalGrnItemReportDto } from 'de-sdk-core/lib/models';
import { InternalGrnItemReportService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-internal-grn-item-share-detail',
    templateUrl: './internal-grn-item-share-detail.component.html',
    styleUrl: './internal-grn-item-share-detail.component.scss'
})
export class InternalGrnItemShareDetailComponent { 
    @Input('idInternalGrnItem') idInternalGrnItem: string // replace dengan id+Nama
    constructor(
        private internalGrnItemReportService: InternalGrnItemReportService,

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
    internalGrnItem: AmimsInternalGrnItemReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.internalGrnItemReportService.internalGrnItemReportControllerFindOne({ id: this.idInternalGrnItem }).subscribe(
            data => {
                this.internalGrnItem = data.data || null;
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
    let url = environment.srv_document + '/pdf/internalGrnItem/' + this.idInternalGrnItem + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
