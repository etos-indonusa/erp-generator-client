import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldGroupDto } from '../../models/tools-custom-field-group-dto';
export interface CustomFieldGroupControllerCreate$Params {
    body: ToolsCustomFieldGroupDto;
}
export declare function customFieldGroupControllerCreate(http: HttpClient, rootUrl: string, params: CustomFieldGroupControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsCustomFieldGroupDto;
}>>;
export declare namespace customFieldGroupControllerCreate {
    var PATH: string;
}
