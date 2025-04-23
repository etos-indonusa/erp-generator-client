import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsEngineerPmtrItemReportDto } from 'de-sdk-core/lib/models';
import { EngineerPmtrItemReportService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-engineer-pmtr-item-share-detail',
    templateUrl: './engineer-pmtr-item-share-detail.component.html',
    styleUrl: './engineer-pmtr-item-share-detail.component.scss'
})
export class EngineerPmtrItemShareDetailComponent { 
    @Input('idEngineerPmtrItem') idEngineerPmtrItem: string // replace dengan id+Nama
    constructor(
        private engineerPmtrItemReportService: EngineerPmtrItemReportService,

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
    engineerPmtrItem: AmimsEngineerPmtrItemReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.engineerPmtrItemReportService.engineerPmtrItemReportControllerFindOne({ id: this.idEngineerPmtrItem }).subscribe(
            data => {
                this.engineerPmtrItem = data.data || null;
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
    let url = environment.srv_document + '/pdf/engineerPmtrItem/' + this.idEngineerPmtrItem + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
