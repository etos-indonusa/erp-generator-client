import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldGroupDto } from '../../models/tools-custom-field-group-dto';
export interface CustomFieldGroupControllerFindOne$Params {
    id: string;
}
export declare function customFieldGroupControllerFindOne(http: HttpClient, rootUrl: string, params: CustomFieldGroupControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldGroupDto;
}>>;
export declare namespace customFieldGroupControllerFindOne {
    var PATH: string;
}
