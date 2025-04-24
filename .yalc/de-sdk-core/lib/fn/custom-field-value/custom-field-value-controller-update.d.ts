import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldValueDto } from '../../models/tools-custom-field-value-dto';
export interface CustomFieldValueControllerUpdate$Params {
    id: string;
    body: ToolsCustomFieldValueDto;
}
export declare function customFieldValueControllerUpdate(http: HttpClient, rootUrl: string, params: CustomFieldValueControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldValueDto;
}>>;
export declare namespace customFieldValueControllerUpdate {
    var PATH: string;
}
