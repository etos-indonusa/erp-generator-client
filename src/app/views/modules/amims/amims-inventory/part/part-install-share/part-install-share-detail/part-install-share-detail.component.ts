import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPartInstallReportDto } from 'de-sdk-core';
import { PartInstallReportService } from 'de-sdk-core';

@Component({
    selector: 'app-part-install-share-detail',
    templateUrl: './part-install-share-detail.component.html',
    styleUrl: './part-install-share-detail.component.scss'
})
export class PartInstallShareDetailComponent { 
    @Input('idPartInstall') idPartInstall: string // replace dengan id+Nama
    constructor(
        private partInstallReportService: PartInstallReportService,

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
    partInstall: AmimsPartInstallReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.partInstallReportService.partInstallReportControllerFindOne({ id: this.idPartInstall }).subscribe(
            data => {
                this.partInstall = data.data || null;
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
    let url = environment.srv_document + '/pdf/partInstall/' + this.idPartInstall + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
