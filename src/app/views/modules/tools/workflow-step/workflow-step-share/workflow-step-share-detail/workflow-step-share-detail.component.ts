import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   ToolsWorkflowStepReportDto } from 'de-sdk-core/models';
import { WorkflowStepReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-workflow-step-share-detail',
    templateUrl: './workflow-step-share-detail.component.html',
    styleUrl: './workflow-step-share-detail.component.scss'
})
export class WorkflowStepShareDetailComponent { 
    @Input('idWorkflowStep') idWorkflowStep: string // replace dengan id+Nama
    constructor(
        private workflowStepReportService: WorkflowStepReportService,

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
    workflowStep: ToolsWorkflowStepReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.workflowStepReportService.workflowStepReportControllerFindOne({ id: this.idWorkflowStep }).subscribe(
            data => {
                this.workflowStep = data.data || null;
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

    print() {
    let url = environment.srv_document + '/pdf/workflowStep/' + this.idWorkflowStep + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
