import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclModuleDto } from '../../models/acl-module-dto';
export interface ModuleControllerRemove$Params {
    id: string;
}
export declare function moduleControllerRemove(http: HttpClient, rootUrl: string, params: ModuleControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclModuleDto;
}>>;
export declare namespace moduleControllerRemove {
    var PATH: string;
}
