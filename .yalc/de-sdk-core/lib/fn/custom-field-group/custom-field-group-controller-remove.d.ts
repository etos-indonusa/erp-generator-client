import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldGroupDto } from '../../models/tools-custom-field-group-dto';
export interface CustomFieldGroupControllerRemove$Params {
    id: string;
}
export declare function customFieldGroupControllerRemove(http: HttpClient, rootUrl: string, params: CustomFieldGroupControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldGroupDto;
}>>;
export declare namespace customFieldGroupControllerRemove {
    var PATH: string;
}
