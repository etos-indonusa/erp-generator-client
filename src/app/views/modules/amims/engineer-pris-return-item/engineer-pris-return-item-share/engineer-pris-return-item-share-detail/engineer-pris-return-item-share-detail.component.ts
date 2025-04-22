import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsEngineerPrisReturnItemReportDto } from 'de-sdk-core/models';
import { EngineerPrisReturnItemReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-engineer-pris-return-item-share-detail',
    templateUrl: './engineer-pris-return-item-share-detail.component.html',
    styleUrl: './engineer-pris-return-item-share-detail.component.scss'
})
export class EngineerPrisReturnItemShareDetailComponent { 
    @Input('idEngineerPrisReturnItem') idEngineerPrisReturnItem: string // replace dengan id+Nama
    constructor(
        private engineerPrisReturnItemReportService: EngineerPrisReturnItemReportService,

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
    engineerPrisReturnItem: AmimsEngineerPrisReturnItemReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.engineerPrisReturnItemReportService.engineerPrisReturnItemReportControllerFindOne({ id: this.idEngineerPrisReturnItem }).subscribe(
            data => {
                this.engineerPrisReturnItem = data.data || null;
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
    let url = environment.srv_document + '/pdf/engineerPrisReturnItem/' + this.idEngineerPrisReturnItem + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
