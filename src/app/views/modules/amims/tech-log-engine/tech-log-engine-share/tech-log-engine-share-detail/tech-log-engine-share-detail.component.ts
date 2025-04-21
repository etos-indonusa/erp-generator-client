import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsTechLogEngineReportDto } from 'src/sdk/core/models';
import { TechLogEngineReportService } from 'src/sdk/core/services';

@Component({
    selector: 'app-tech-log-engine-share-detail',
    templateUrl: './tech-log-engine-share-detail.component.html',
    styleUrl: './tech-log-engine-share-detail.component.scss'
})
export class TechLogEngineShareDetailComponent { 
    @Input('idTechLogEngine') idTechLogEngine: string // replace dengan id+Nama
    constructor(
        private techLogEngineReportService: TechLogEngineReportService,

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
    techLogEngine: AmimsTechLogEngineReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.techLogEngineReportService.techLogEngineReportControllerFindOne({ id: this.idTechLogEngine }).subscribe(
            data => {
                this.techLogEngine = data.data || null;
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
    let url = environment.srv_document + '/pdf/techLogEngine/' + this.idTechLogEngine + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
