import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclModuleDto } from '../../models/acl-module-dto';
export interface ModuleControllerUpdate$Params {
    id: string;
    body: AclModuleDto;
}
export declare function moduleControllerUpdate(http: HttpClient, rootUrl: string, params: ModuleControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclModuleDto;
}>>;
export declare namespace moduleControllerUpdate {
    var PATH: string;
}
