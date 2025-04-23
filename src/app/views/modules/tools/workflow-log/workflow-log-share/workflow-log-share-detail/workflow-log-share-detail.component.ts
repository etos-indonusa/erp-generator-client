import { Component, Input } from '@angular/core';
import type { ToolsWorkflowLogDto } from 'de-sdk-core';

@Component({
    selector: 'app-workflow-log-share-detail',
    templateUrl: './workflow-log-share-detail.component.html',
    styleUrl: './workflow-log-share-detail.component.scss'
})
export class WorkflowLogShareDetailComponent {
    @Input('workflowLog') data: ToolsWorkflowLogDto = {
  forModule: '',
  fromModuleId: '',
  idUsers: '',
  idWorkflowLog: '',
  idWorkflowStep: ''
};
}
