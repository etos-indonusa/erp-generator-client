import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUserTokensDto } from '../../models/acl-user-tokens-dto';
export interface UserTokensControllerRemove$Params {
    id: string;
}
export declare function userTokensControllerRemove(http: HttpClient, rootUrl: string, params: UserTokensControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclUserTokensDto;
}>>;
export declare namespace userTokensControllerRemove {
    var PATH: string;
}
