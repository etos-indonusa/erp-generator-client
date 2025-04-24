import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldValueDto } from '../../models/tools-custom-field-value-dto';
export interface CustomFieldValueControllerFindOne$Params {
    id: string;
}
export declare function customFieldValueControllerFindOne(http: HttpClient, rootUrl: string, params: CustomFieldValueControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldValueDto;
}>>;
export declare namespace customFieldValueControllerFindOne {
    var PATH: string;
}
