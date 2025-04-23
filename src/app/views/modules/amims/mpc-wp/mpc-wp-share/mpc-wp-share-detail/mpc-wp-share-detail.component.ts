import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsMpcWpReportDto } from 'de-sdk-core/lib/models';
import { MpcWpReportService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-mpc-wp-share-detail',
    templateUrl: './mpc-wp-share-detail.component.html',
    styleUrl: './mpc-wp-share-detail.component.scss'
})
export class MpcWpShareDetailComponent { 
    @Input('idMpcWp') idMpcWp: string // replace dengan id+Nama
    constructor(
        private mpcWpReportService: MpcWpReportService,

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
    mpcWp: AmimsMpcWpReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.mpcWpReportService.mpcWpReportControllerFindOne({ id: this.idMpcWp }).subscribe(
            data => {
                this.mpcWp = data.data || null;
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
    let url = environment.srv_document + '/pdf/mpcWp/' + this.idMpcWp + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
