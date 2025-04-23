import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsEngineerPrisItemReportDto } from 'de-sdk-core';
import { EngineerPrisItemReportService } from 'de-sdk-core';

@Component({
    selector: 'app-engineer-pris-item-share-detail',
    templateUrl: './engineer-pris-item-share-detail.component.html',
    styleUrl: './engineer-pris-item-share-detail.component.scss'
})
export class EngineerPrisItemShareDetailComponent { 
    @Input('idEngineerPrisItem') idEngineerPrisItem: string // replace dengan id+Nama
    constructor(
        private engineerPrisItemReportService: EngineerPrisItemReportService,

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
    engineerPrisItem: AmimsEngineerPrisItemReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.engineerPrisItemReportService.engineerPrisItemReportControllerFindOne({ id: this.idEngineerPrisItem }).subscribe(
            data => {
                this.engineerPrisItem = data.data || null;
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
    let url = environment.srv_document + '/pdf/engineerPrisItem/' + this.idEngineerPrisItem + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
