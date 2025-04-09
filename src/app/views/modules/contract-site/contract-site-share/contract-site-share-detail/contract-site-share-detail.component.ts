import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   ContractSiteReportDto } from 'src/sdk/core/models';
import { ContractSiteReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-contract-site-share-detail',
    templateUrl: './contract-site-share-detail.component.html',
    styleUrl: './contract-site-share-detail.component.scss'
})
export class ContractSiteShareDetailComponent { 
    @Input('idContractSite') idContractSite: string // replace dengan id+Nama
    constructor(
        private contractSiteReportService: ContractSiteReportService,

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
    contractSite: ContractSiteReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.contractSiteReportService.contractSiteReportControllerFindOne({ id: this.idContractSite }).subscribe(
            data => {
                this.contractSite = data.data || null;
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

    print() {
    let url = environment.srv_document + '/pdf/contractSite/' + this.idContractSite + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
