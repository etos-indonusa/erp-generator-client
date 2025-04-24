import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldDto } from '../../models/tools-custom-field-dto';
export interface CustomFieldControllerFindOne$Params {
    id: string;
}
export declare function customFieldControllerFindOne(http: HttpClient, rootUrl: string, params: CustomFieldControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldDto;
}>>;
export declare namespace customFieldControllerFindOne {
    var PATH: string;
}
