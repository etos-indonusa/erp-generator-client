import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUserTokensDto } from '../../models/acl-user-tokens-dto';
export interface UserTokensControllerFindOne$Params {
    id: string;
}
export declare function userTokensControllerFindOne(http: HttpClient, rootUrl: string, params: UserTokensControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclUserTokensDto;
}>>;
export declare namespace userTokensControllerFindOne {
    var PATH: string;
}
