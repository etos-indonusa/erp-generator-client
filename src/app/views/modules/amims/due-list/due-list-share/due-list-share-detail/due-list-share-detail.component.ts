import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsDueListReportDto } from 'de-sdk-core/lib/models';
import { DueListReportService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-due-list-share-detail',
    templateUrl: './due-list-share-detail.component.html',
    styleUrl: './due-list-share-detail.component.scss'
})
export class DueListShareDetailComponent { 
    @Input('idDueList') idDueList: string // replace dengan id+Nama
    constructor(
        private dueListReportService: DueListReportService,

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
    dueList: AmimsDueListReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.dueListReportService.dueListReportControllerFindOne({ id: this.idDueList }).subscribe(
            data => {
                this.dueList = data.data || null;
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
    let url = environment.srv_document + '/pdf/dueList/' + this.idDueList + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
