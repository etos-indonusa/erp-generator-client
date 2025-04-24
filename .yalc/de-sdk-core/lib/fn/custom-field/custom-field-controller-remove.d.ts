import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldDto } from '../../models/tools-custom-field-dto';
export interface CustomFieldControllerRemove$Params {
    id: string;
}
export declare function customFieldControllerRemove(http: HttpClient, rootUrl: string, params: CustomFieldControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldDto;
}>>;
export declare namespace customFieldControllerRemove {
    var PATH: string;
}
