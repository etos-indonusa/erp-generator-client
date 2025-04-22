import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsEngineerPrisReturnReportDto } from 'de-sdk-core/models';
import { EngineerPrisReturnReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-engineer-pris-return-share-detail',
    templateUrl: './engineer-pris-return-share-detail.component.html',
    styleUrl: './engineer-pris-return-share-detail.component.scss'
})
export class EngineerPrisReturnShareDetailComponent { 
    @Input('idEngineerPrisReturn') idEngineerPrisReturn: string // replace dengan id+Nama
    constructor(
        private engineerPrisReturnReportService: EngineerPrisReturnReportService,

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
    engineerPrisReturn: AmimsEngineerPrisReturnReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.engineerPrisReturnReportService.engineerPrisReturnReportControllerFindOne({ id: this.idEngineerPrisReturn }).subscribe(
            data => {
                this.engineerPrisReturn = data.data || null;
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
    let url = environment.srv_document + '/pdf/engineerPrisReturn/' + this.idEngineerPrisReturn + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
