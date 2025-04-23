import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPartAtaReportDto } from 'de-sdk-core';
import { PartAtaReportService } from 'de-sdk-core';

@Component({
    selector: 'app-part-ata-share-detail',
    templateUrl: './part-ata-share-detail.component.html',
    styleUrl: './part-ata-share-detail.component.scss'
})
export class PartAtaShareDetailComponent { 
    @Input('idPartAta') idPartAta: string // replace dengan id+Nama
    constructor(
        private partAtaReportService: PartAtaReportService,

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
    partAta: AmimsPartAtaReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.partAtaReportService.partAtaReportControllerFindOne({ id: this.idPartAta }).subscribe(
            data => {
                this.partAta = data.data || null;
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
    let url = environment.srv_document + '/pdf/partAta/' + this.idPartAta + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
