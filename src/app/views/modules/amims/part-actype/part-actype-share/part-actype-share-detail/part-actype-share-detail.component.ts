import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPartActypeReportDto } from 'de-sdk-core/models';
import { PartActypeReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-part-actype-share-detail',
    templateUrl: './part-actype-share-detail.component.html',
    styleUrl: './part-actype-share-detail.component.scss'
})
export class PartActypeShareDetailComponent { 
    @Input('idPartActype') idPartActype: string // replace dengan id+Nama
    constructor(
        private partActypeReportService: PartActypeReportService,

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
    partActype: AmimsPartActypeReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.partActypeReportService.partActypeReportControllerFindOne({ id: this.idPartActype }).subscribe(
            data => {
                this.partActype = data.data || null;
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
    let url = environment.srv_document + '/pdf/partActype/' + this.idPartActype + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
