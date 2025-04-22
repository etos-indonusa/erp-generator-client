import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsMpcJoOperatorReportDto } from 'de-sdk-core/models';
import { MpcJoOperatorReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-mpc-jo-operator-share-detail',
    templateUrl: './mpc-jo-operator-share-detail.component.html',
    styleUrl: './mpc-jo-operator-share-detail.component.scss'
})
export class MpcJoOperatorShareDetailComponent { 
    @Input('idMpcJoOperator') idMpcJoOperator: string // replace dengan id+Nama
    constructor(
        private mpcJoOperatorReportService: MpcJoOperatorReportService,

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
    mpcJoOperator: AmimsMpcJoOperatorReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.mpcJoOperatorReportService.mpcJoOperatorReportControllerFindOne({ id: this.idMpcJoOperator }).subscribe(
            data => {
                this.mpcJoOperator = data.data || null;
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
    let url = environment.srv_document + '/pdf/mpcJoOperator/' + this.idMpcJoOperator + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
