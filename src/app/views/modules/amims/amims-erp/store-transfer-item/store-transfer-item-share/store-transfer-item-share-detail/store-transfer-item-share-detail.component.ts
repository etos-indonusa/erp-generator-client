import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsStoreTransferItemReportDto } from 'de-sdk-core';
import { StoreTransferItemReportService } from 'de-sdk-core';

@Component({
    selector: 'app-store-transfer-item-share-detail',
    templateUrl: './store-transfer-item-share-detail.component.html',
    styleUrl: './store-transfer-item-share-detail.component.scss'
})
export class StoreTransferItemShareDetailComponent { 
    @Input('idStoreTransferItem') idStoreTransferItem: string // replace dengan id+Nama
    constructor(
        private storeTransferItemReportService: StoreTransferItemReportService,

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
    storeTransferItem: AmimsStoreTransferItemReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.storeTransferItemReportService.storeTransferItemReportControllerFindOne({ id: this.idStoreTransferItem }).subscribe(
            data => {
                this.storeTransferItem = data.data || null;
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
    let url = environment.srv_document + '/pdf/storeTransferItem/' + this.idStoreTransferItem + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
