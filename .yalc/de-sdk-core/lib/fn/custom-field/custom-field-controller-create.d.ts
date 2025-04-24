import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldDto } from '../../models/tools-custom-field-dto';
export interface CustomFieldControllerCreate$Params {
    body: ToolsCustomFieldDto;
}
export declare function customFieldControllerCreate(http: HttpClient, rootUrl: string, params: CustomFieldControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldDto;
}>>;
export declare namespace customFieldControllerCreate {
    var PATH: string;
}
