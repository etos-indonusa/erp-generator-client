import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsTdReportDto } from 'de-sdk-core/models';
import { TdReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-td-share-detail',
    templateUrl: './td-share-detail.component.html',
    styleUrl: './td-share-detail.component.scss'
})
export class TdShareDetailComponent { 
    @Input('idTd') idTd: string // replace dengan id+Nama
    constructor(
        private tdReportService: TdReportService,

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
    td: AmimsTdReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.tdReportService.tdReportControllerFindOne({ id: this.idTd }).subscribe(
            data => {
                this.td = data.data || null;
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
    let url = environment.srv_document + '/pdf/td/' + this.idTd + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
