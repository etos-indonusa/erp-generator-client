import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsTdDetailReportDto } from 'src/sdk/core/models';
import { TdDetailReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-td-detail-share-detail',
    templateUrl: './td-detail-share-detail.component.html',
    styleUrl: './td-detail-share-detail.component.scss'
})
export class TdDetailShareDetailComponent { 
    @Input('idTdDetail') idTdDetail: string // replace dengan id+Nama
    constructor(
        private tdDetailReportService: TdDetailReportService,

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
    tdDetail: AmimsTdDetailReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.tdDetailReportService.tdDetailReportControllerFindOne({ id: this.idTdDetail }).subscribe(
            data => {
                this.tdDetail = data.data || null;
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
    let url = environment.srv_document + '/pdf/tdDetail/' + this.idTdDetail + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
