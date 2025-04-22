import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsInternalGrnReportDto } from 'de-sdk-core/models';
import { InternalGrnReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-internal-grn-share-detail',
    templateUrl: './internal-grn-share-detail.component.html',
    styleUrl: './internal-grn-share-detail.component.scss'
})
export class InternalGrnShareDetailComponent { 
    @Input('idInternalGrn') idInternalGrn: string // replace dengan id+Nama
    constructor(
        private internalGrnReportService: InternalGrnReportService,

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
    internalGrn: AmimsInternalGrnReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.internalGrnReportService.internalGrnReportControllerFindOne({ id: this.idInternalGrn }).subscribe(
            data => {
                this.internalGrn = data.data || null;
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
    let url = environment.srv_document + '/pdf/internalGrn/' + this.idInternalGrn + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
