import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPurGrnReportDto } from 'de-sdk-core';
import { PurGrnReportService } from 'de-sdk-core';

@Component({
    selector: 'app-pur-grn-share-detail',
    templateUrl: './pur-grn-share-detail.component.html',
    styleUrl: './pur-grn-share-detail.component.scss'
})
export class PurGrnShareDetailComponent { 
    @Input('idPurGrn') idPurGrn: string // replace dengan id+Nama
    constructor(
        private purGrnReportService: PurGrnReportService,

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
    purGrn: AmimsPurGrnReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.purGrnReportService.purGrnReportControllerFindOne({ id: this.idPurGrn }).subscribe(
            data => {
                this.purGrn = data.data || null;
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
    let url = environment.srv_document + '/pdf/purGrn/' + this.idPurGrn + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
