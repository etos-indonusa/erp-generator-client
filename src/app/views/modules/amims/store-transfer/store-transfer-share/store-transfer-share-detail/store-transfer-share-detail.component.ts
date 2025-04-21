import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsStoreTransferReportDto } from 'src/sdk/core/models';
import { StoreTransferReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-store-transfer-share-detail',
    templateUrl: './store-transfer-share-detail.component.html',
    styleUrl: './store-transfer-share-detail.component.scss'
})
export class StoreTransferShareDetailComponent { 
    @Input('idStoreTransfer') idStoreTransfer: string // replace dengan id+Nama
    constructor(
        private storeTransferReportService: StoreTransferReportService,

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
    storeTransfer: AmimsStoreTransferReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.storeTransferReportService.storeTransferReportControllerFindOne({ id: this.idStoreTransfer }).subscribe(
            data => {
                this.storeTransfer = data.data || null;
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
    let url = environment.srv_document + '/pdf/storeTransfer/' + this.idStoreTransfer + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
