import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsMpartReportDto } from 'de-sdk-core/lib/models';
import { MpartReportService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-mpart-share-detail',
    templateUrl: './mpart-share-detail.component.html',
    styleUrl: './mpart-share-detail.component.scss'
})
export class MpartShareDetailComponent { 
    @Input('idMpart') idMpart: string // replace dengan id+Nama
    constructor(
        private mpartReportService: MpartReportService,

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
    mpart: AmimsMpartReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.mpartReportService.mpartReportControllerFindOne({ id: this.idMpart }).subscribe(
            data => {
                this.mpart = data.data || null;
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
    let url = environment.srv_document + '/pdf/mpart/' + this.idMpart + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
