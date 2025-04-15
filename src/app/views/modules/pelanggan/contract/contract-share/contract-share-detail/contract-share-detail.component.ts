import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   PelangganContractReportDto } from 'src/sdk/core/models';
import { ContractReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-contract-share-detail',
    templateUrl: './contract-share-detail.component.html',
    styleUrl: './contract-share-detail.component.scss'
})
export class ContractShareDetailComponent { 
    @Input('idContract') idContract: string // replace dengan id+Nama
    constructor(
        private contractReportService: ContractReportService,

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
    contract: PelangganContractReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.contractReportService.contractReportControllerFindOne({ id: this.idContract }).subscribe(
            data => {
                this.contract = data.data || null;
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

    handleApprovalSubmit(event: { status: 'approve' | 'reject', note: string }) {
        console.log('✔ Approval submitted:', event);
    }

    refreshApprovalSteps() {
        console.log('🔁 Refreshing approval widget...');
        // nanti bisa refresh steps/log, kalau sudah connect ke backend
    }

    print() {
    let url = environment.srv_document + '/pdf/contract/' + this.idContract + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
