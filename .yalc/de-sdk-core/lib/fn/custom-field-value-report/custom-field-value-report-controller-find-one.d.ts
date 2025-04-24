import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldValueReportDto } from '../../models/tools-custom-field-value-report-dto';
export interface CustomFieldValueReportControllerFindOne$Params {
    id: string;
}
export declare function customFieldValueReportControllerFindOne(http: HttpClient, rootUrl: string, params: CustomFieldValueReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldValueReportDto;
}>>;
export declare namespace customFieldValueReportControllerFindOne {
    var PATH: string;
}
