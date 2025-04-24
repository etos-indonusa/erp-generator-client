import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclModuleDto } from '../../models/acl-module-dto';
export interface ModuleControllerFindOne$Params {
    id: string;
}
export declare function moduleControllerFindOne(http: HttpClient, rootUrl: string, params: ModuleControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclModuleDto;
}>>;
export declare namespace moduleControllerFindOne {
    var PATH: string;
}
