import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUserTokensDto } from '../../models/acl-user-tokens-dto';
export interface UserTokensControllerUpdate$Params {
    id: string;
    body: AclUserTokensDto;
}
export declare function userTokensControllerUpdate(http: HttpClient, rootUrl: string, params: UserTokensControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclUserTokensDto;
}>>;
export declare namespace userTokensControllerUpdate {
    var PATH: string;
}
