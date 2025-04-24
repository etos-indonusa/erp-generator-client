import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldValueDto } from '../../models/tools-custom-field-value-dto';
export interface CustomFieldValueControllerRemove$Params {
    id: string;
}
export declare function customFieldValueControllerRemove(http: HttpClient, rootUrl: string, params: CustomFieldValueControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldValueDto;
}>>;
export declare namespace customFieldValueControllerRemove {
    var PATH: string;
}
