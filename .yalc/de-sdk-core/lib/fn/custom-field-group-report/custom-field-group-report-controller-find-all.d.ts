import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
import { ToolsCustomFieldGroupReportDto } from '../../models/tools-custom-field-group-report-dto';
export interface CustomFieldGroupReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function customFieldGroupReportControllerFindAll(http: HttpClient, rootUrl: string, params: CustomFieldGroupReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<ToolsCustomFieldGroupReportDto>;
    'total'?: number;
}>>;
export declare namespace customFieldGroupReportControllerFindAll {
    var PATH: string;
}
