import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldGroupDto } from '../../models/tools-custom-field-group-dto';
export interface CustomFieldGroupControllerUpdate$Params {
    id: string;
    body: ToolsCustomFieldGroupDto;
}
export declare function customFieldGroupControllerUpdate(http: HttpClient, rootUrl: string, params: CustomFieldGroupControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldGroupDto;
}>>;
export declare namespace customFieldGroupControllerUpdate {
    var PATH: string;
}
