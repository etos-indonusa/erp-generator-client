import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsDueListOutputReportDto } from 'de-sdk-core/lib/models';
import { DueListOutputReportService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-due-list-output-share-detail',
    templateUrl: './due-list-output-share-detail.component.html',
    styleUrl: './due-list-output-share-detail.component.scss'
})
export class DueListOutputShareDetailComponent { 
    @Input('idDueListOutput') idDueListOutput: string // replace dengan id+Nama
    constructor(
        private dueListOutputReportService: DueListOutputReportService,

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
    dueListOutput: AmimsDueListOutputReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.dueListOutputReportService.dueListOutputReportControllerFindOne({ id: this.idDueListOutput }).subscribe(
            data => {
                this.dueListOutput = data.data || null;
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
    let url = environment.srv_document + '/pdf/dueListOutput/' + this.idDueListOutput + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
