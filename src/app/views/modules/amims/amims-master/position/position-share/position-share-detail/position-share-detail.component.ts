import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPositionReportDto } from 'de-sdk-core';
import { PositionReportService } from 'de-sdk-core';

@Component({
    selector: 'app-position-share-detail',
    templateUrl: './position-share-detail.component.html',
    styleUrl: './position-share-detail.component.scss'
})
export class PositionShareDetailComponent { 
    @Input('idPosition') idPosition: string // replace dengan id+Nama
    constructor(
        private positionReportService: PositionReportService,

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
    position: AmimsPositionReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.positionReportService.positionReportControllerFindOne({ id: this.idPosition }).subscribe(
            data => {
                this.position = data.data || null;
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
    let url = environment.srv_document + '/pdf/position/' + this.idPosition + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
