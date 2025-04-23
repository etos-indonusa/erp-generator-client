import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPartReportDto } from 'de-sdk-core';
import { PartReportService } from 'de-sdk-core';

@Component({
    selector: 'app-part-share-detail',
    templateUrl: './part-share-detail.component.html',
    styleUrl: './part-share-detail.component.scss'
})
export class PartShareDetailComponent { 
    @Input('idPart') idPart: string // replace dengan id+Nama
    constructor(
        private partReportService: PartReportService,

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
    part: AmimsPartReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.partReportService.partReportControllerFindOne({ id: this.idPart }).subscribe(
            data => {
                this.part = data.data || null;
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
    let url = environment.srv_document + '/pdf/part/' + this.idPart + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
