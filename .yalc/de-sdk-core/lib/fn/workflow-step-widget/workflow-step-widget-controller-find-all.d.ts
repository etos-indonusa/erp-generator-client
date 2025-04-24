import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { BaseWidgetQueryDto } from '../../models/base-widget-query-dto';
import { Object } from '../../models/object';
import { SelectFieldDto } from '../../models/select-field-dto';
import { ToolsWorkflowStepWidgetDto } from '../../models/tools-workflow-step-widget-dto';
export interface WorkflowStepWidgetControllerFindAll$Params {
    /**
     * Filter object
     */
    filter?: Object;
    /**
     * JoinWhere object
     */
    joinWhere?: Object;
    /**
     * Select fields with aggregation, e.g. [{ type: "sum", field: "nilai", alias: "totalNilai" }]
     */
    select?: Array<SelectFieldDto>;
    /**
     * Fields to group by
     */
    groupBy?: Array<string>;
    sortKey?: string;
    sortValue?: 'ASC' | 'DESC';
    body: BaseWidgetQueryDto;
}
export declare function workflowStepWidgetControllerFindAll(http: HttpClient, rootUrl: string, params: WorkflowStepWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<ToolsWorkflowStepWidgetDto>;
    'total'?: number;
}>>;
export declare namespace workflowStepWidgetControllerFindAll {
    var PATH: string;
}
