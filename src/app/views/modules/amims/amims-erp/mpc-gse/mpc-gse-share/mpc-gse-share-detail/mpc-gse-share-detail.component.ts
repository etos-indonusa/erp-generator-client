import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsMpcGseReportDto } from 'de-sdk-core';
import { MpcGseReportService } from 'de-sdk-core';

@Component({
    selector: 'app-mpc-gse-share-detail',
    templateUrl: './mpc-gse-share-detail.component.html',
    styleUrl: './mpc-gse-share-detail.component.scss'
})
export class MpcGseShareDetailComponent { 
    @Input('idMpcGse') idMpcGse: string // replace dengan id+Nama
    constructor(
        private mpcGseReportService: MpcGseReportService,

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
    mpcGse: AmimsMpcGseReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.mpcGseReportService.mpcGseReportControllerFindOne({ id: this.idMpcGse }).subscribe(
            data => {
                this.mpcGse = data.data || null;
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
    let url = environment.srv_document + '/pdf/mpcGse/' + this.idMpcGse + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
