import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPartConditionReportDto } from 'de-sdk-core/models';
import { PartConditionReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-part-condition-share-detail',
    templateUrl: './part-condition-share-detail.component.html',
    styleUrl: './part-condition-share-detail.component.scss'
})
export class PartConditionShareDetailComponent { 
    @Input('idPartCondition') idPartCondition: string // replace dengan id+Nama
    constructor(
        private partConditionReportService: PartConditionReportService,

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
    partCondition: AmimsPartConditionReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.partConditionReportService.partConditionReportControllerFindOne({ id: this.idPartCondition }).subscribe(
            data => {
                this.partCondition = data.data || null;
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
    let url = environment.srv_document + '/pdf/partCondition/' + this.idPartCondition + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
