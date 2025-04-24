import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
import { ToolsCustomFieldValueReportDto } from '../../models/tools-custom-field-value-report-dto';
export interface CustomFieldValueReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function customFieldValueReportControllerFindAll(http: HttpClient, rootUrl: string, params: CustomFieldValueReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<ToolsCustomFieldValueReportDto>;
    'total'?: number;
}>>;
export declare namespace customFieldValueReportControllerFindAll {
    var PATH: string;
}
