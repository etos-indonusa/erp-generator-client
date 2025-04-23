import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsTdTypeReportDto } from 'de-sdk-core/lib/models';
import { TdTypeReportService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-td-type-share-detail',
    templateUrl: './td-type-share-detail.component.html',
    styleUrl: './td-type-share-detail.component.scss'
})
export class TdTypeShareDetailComponent { 
    @Input('idTdType') idTdType: string // replace dengan id+Nama
    constructor(
        private tdTypeReportService: TdTypeReportService,

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
    tdType: AmimsTdTypeReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.tdTypeReportService.tdTypeReportControllerFindOne({ id: this.idTdType }).subscribe(
            data => {
                this.tdType = data.data || null;
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
    let url = environment.srv_document + '/pdf/tdType/' + this.idTdType + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
