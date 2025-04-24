import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUserTokensDto } from '../../models/acl-user-tokens-dto';
export interface UserTokensControllerCreate$Params {
    body: AclUserTokensDto;
}
export declare function userTokensControllerCreate(http: HttpClient, rootUrl: string, params: UserTokensControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclUserTokensDto;
}>>;
export declare namespace userTokensControllerCreate {
    var PATH: string;
}
