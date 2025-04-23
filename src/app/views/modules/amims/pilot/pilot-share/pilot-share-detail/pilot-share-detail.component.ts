import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsPilotReportDto } from 'de-sdk-core/lib/models';
import { PilotReportService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-pilot-share-detail',
    templateUrl: './pilot-share-detail.component.html',
    styleUrl: './pilot-share-detail.component.scss'
})
export class PilotShareDetailComponent { 
    @Input('idPilot') idPilot: string // replace dengan id+Nama
    constructor(
        private pilotReportService: PilotReportService,

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
    pilot: AmimsPilotReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.pilotReportService.pilotReportControllerFindOne({ id: this.idPilot }).subscribe(
            data => {
                this.pilot = data.data || null;
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
    let url = environment.srv_document + '/pdf/pilot/' + this.idPilot + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
