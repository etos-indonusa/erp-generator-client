import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPartidReportDto } from 'de-sdk-core/models';
import { PartidReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-partid-share-detail',
    templateUrl: './partid-share-detail.component.html',
    styleUrl: './partid-share-detail.component.scss'
})
export class PartidShareDetailComponent { 
    @Input('idPartid') idPartid: string // replace dengan id+Nama
    constructor(
        private partidReportService: PartidReportService,

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
    partid: AmimsPartidReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.partidReportService.partidReportControllerFindOne({ id: this.idPartid }).subscribe(
            data => {
                this.partid = data.data || null;
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
    let url = environment.srv_document + '/pdf/partid/' + this.idPartid + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
