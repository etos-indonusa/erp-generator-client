import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldValueDto } from '../../models/tools-custom-field-value-dto';
export interface CustomFieldValueControllerCreate$Params {
    body: ToolsCustomFieldValueDto;
}
export declare function customFieldValueControllerCreate(http: HttpClient, rootUrl: string, params: CustomFieldValueControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldValueDto;
}>>;
export declare namespace customFieldValueControllerCreate {
    var PATH: string;
}
