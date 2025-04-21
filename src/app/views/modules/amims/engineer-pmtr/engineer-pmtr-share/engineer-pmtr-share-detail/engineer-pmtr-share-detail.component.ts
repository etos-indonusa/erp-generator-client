import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsEngineerPmtrReportDto } from 'src/sdk/core/models';
import { EngineerPmtrReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-engineer-pmtr-share-detail',
    templateUrl: './engineer-pmtr-share-detail.component.html',
    styleUrl: './engineer-pmtr-share-detail.component.scss'
})
export class EngineerPmtrShareDetailComponent { 
    @Input('idEngineerPmtr') idEngineerPmtr: string // replace dengan id+Nama
    constructor(
        private engineerPmtrReportService: EngineerPmtrReportService,

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
    engineerPmtr: AmimsEngineerPmtrReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.engineerPmtrReportService.engineerPmtrReportControllerFindOne({ id: this.idEngineerPmtr }).subscribe(
            data => {
                this.engineerPmtr = data.data || null;
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
    let url = environment.srv_document + '/pdf/engineerPmtr/' + this.idEngineerPmtr + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
