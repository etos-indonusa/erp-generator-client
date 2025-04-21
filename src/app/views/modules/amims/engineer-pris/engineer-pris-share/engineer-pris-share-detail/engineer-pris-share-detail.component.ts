import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsEngineerPrisReportDto } from 'src/sdk/core/models';
import { EngineerPrisReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-engineer-pris-share-detail',
    templateUrl: './engineer-pris-share-detail.component.html',
    styleUrl: './engineer-pris-share-detail.component.scss'
})
export class EngineerPrisShareDetailComponent { 
    @Input('idEngineerPris') idEngineerPris: string // replace dengan id+Nama
    constructor(
        private engineerPrisReportService: EngineerPrisReportService,

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
    engineerPris: AmimsEngineerPrisReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.engineerPrisReportService.engineerPrisReportControllerFindOne({ id: this.idEngineerPris }).subscribe(
            data => {
                this.engineerPris = data.data || null;
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
    let url = environment.srv_document + '/pdf/engineerPris/' + this.idEngineerPris + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
