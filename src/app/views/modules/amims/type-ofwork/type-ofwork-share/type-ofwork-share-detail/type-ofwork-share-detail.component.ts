import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsTypeOfworkReportDto } from 'src/sdk/core/models';
import { TypeOfworkReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-type-ofwork-share-detail',
    templateUrl: './type-ofwork-share-detail.component.html',
    styleUrl: './type-ofwork-share-detail.component.scss'
})
export class TypeOfworkShareDetailComponent { 
    @Input('idTypeOfwork') idTypeOfwork: string // replace dengan id+Nama
    constructor(
        private typeOfworkReportService: TypeOfworkReportService,

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
    typeOfwork: AmimsTypeOfworkReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.typeOfworkReportService.typeOfworkReportControllerFindOne({ id: this.idTypeOfwork }).subscribe(
            data => {
                this.typeOfwork = data.data || null;
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
    let url = environment.srv_document + '/pdf/typeOfwork/' + this.idTypeOfwork + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
