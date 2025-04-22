import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsMpcPiroItemReportDto } from 'de-sdk-core/models';
import { MpcPiroItemReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-mpc-piro-item-share-detail',
    templateUrl: './mpc-piro-item-share-detail.component.html',
    styleUrl: './mpc-piro-item-share-detail.component.scss'
})
export class MpcPiroItemShareDetailComponent { 
    @Input('idMpcPiroItem') idMpcPiroItem: string // replace dengan id+Nama
    constructor(
        private mpcPiroItemReportService: MpcPiroItemReportService,

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
    mpcPiroItem: AmimsMpcPiroItemReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.mpcPiroItemReportService.mpcPiroItemReportControllerFindOne({ id: this.idMpcPiroItem }).subscribe(
            data => {
                this.mpcPiroItem = data.data || null;
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
    let url = environment.srv_document + '/pdf/mpcPiroItem/' + this.idMpcPiroItem + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
