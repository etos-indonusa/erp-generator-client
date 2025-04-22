import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   ToolsWorkflowReportDto } from 'de-sdk-core/models';
import { WorkflowReportService } from 'de-sdk-core/services';

@Component({
    selector: 'app-workflow-share-detail',
    templateUrl: './workflow-share-detail.component.html',
    styleUrl: './workflow-share-detail.component.scss'
})
export class WorkflowShareDetailComponent { 
    @Input('idWorkflow') idWorkflow: string // replace dengan id+Nama
    constructor(
        private workflowReportService: WorkflowReportService,

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
    workflow: ToolsWorkflowReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.workflowReportService.workflowReportControllerFindOne({ id: this.idWorkflow }).subscribe(
            data => {
                this.workflow = data.data || null;
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
    let url = environment.srv_document + '/pdf/workflow/' + this.idWorkflow + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
