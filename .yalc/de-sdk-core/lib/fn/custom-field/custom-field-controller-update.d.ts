import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldDto } from '../../models/tools-custom-field-dto';
export interface CustomFieldControllerUpdate$Params {
    id: string;
    body: ToolsCustomFieldDto;
}
export declare function customFieldControllerUpdate(http: HttpClient, rootUrl: string, params: CustomFieldControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldDto;
}>>;
export declare namespace customFieldControllerUpdate {
    var PATH: string;
}
