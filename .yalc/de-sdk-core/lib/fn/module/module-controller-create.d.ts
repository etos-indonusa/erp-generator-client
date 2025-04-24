import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclModuleDto } from '../../models/acl-module-dto';
export interface ModuleControllerCreate$Params {
    body: AclModuleDto;
}
export declare function moduleControllerCreate(http: HttpClient, rootUrl: string, params: ModuleControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclModuleDto;
}>>;
export declare namespace moduleControllerCreate {
    var PATH: string;
}
