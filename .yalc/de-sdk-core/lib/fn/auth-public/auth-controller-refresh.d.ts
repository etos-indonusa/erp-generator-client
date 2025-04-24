import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { RefreshTokenDto } from '../../models/refresh-token-dto';
import { TokenOnlyResponseDto } from '../../models/token-only-response-dto';
export interface AuthControllerRefresh$Params {
    body: RefreshTokenDto;
}
export declare function authControllerRefresh(http: HttpClient, rootUrl: string, params: AuthControllerRefresh$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenOnlyResponseDto>>;
export declare namespace authControllerRefresh {
    var PATH: string;
}
