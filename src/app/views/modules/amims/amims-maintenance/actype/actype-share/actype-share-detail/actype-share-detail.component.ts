import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsActypeReportDto } from 'de-sdk-core';
import { ActypeReportService } from 'de-sdk-core';

@Component({
    selector: 'app-actype-share-detail',
    templateUrl: './actype-share-detail.component.html',
    styleUrl: './actype-share-detail.component.scss'
})
export class ActypeShareDetailComponent { 
    @Input('idActype') idActype: string // replace dengan id+Nama
    constructor(
        private actypeReportService: ActypeReportService,

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
    actype: AmimsActypeReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.actypeReportService.actypeReportControllerFindOne({ id: this.idActype }).subscribe(
            data => {
                this.actype = data.data || null;
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
    let url = environment.srv_document + '/pdf/actype/' + this.idActype + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
