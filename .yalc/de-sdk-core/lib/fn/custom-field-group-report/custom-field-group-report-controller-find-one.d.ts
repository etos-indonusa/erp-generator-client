import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldGroupReportDto } from '../../models/tools-custom-field-group-report-dto';
export interface CustomFieldGroupReportControllerFindOne$Params {
    id: string;
}
export declare function customFieldGroupReportControllerFindOne(http: HttpClient, rootUrl: string, params: CustomFieldGroupReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldGroupReportDto;
}>>;
export declare namespace customFieldGroupReportControllerFindOne {
    var PATH: string;
}
