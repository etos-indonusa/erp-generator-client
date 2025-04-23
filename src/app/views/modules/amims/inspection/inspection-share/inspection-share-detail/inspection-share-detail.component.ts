import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsInspectionReportDto } from 'de-sdk-core/lib/models';
import { InspectionReportService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-inspection-share-detail',
    templateUrl: './inspection-share-detail.component.html',
    styleUrl: './inspection-share-detail.component.scss'
})
export class InspectionShareDetailComponent { 
    @Input('idInspection') idInspection: string // replace dengan id+Nama
    constructor(
        private inspectionReportService: InspectionReportService,

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
    inspection: AmimsInspectionReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.inspectionReportService.inspectionReportControllerFindOne({ id: this.idInspection }).subscribe(
            data => {
                this.inspection = data.data || null;
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
    let url = environment.srv_document + '/pdf/inspection/' + this.idInspection + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
