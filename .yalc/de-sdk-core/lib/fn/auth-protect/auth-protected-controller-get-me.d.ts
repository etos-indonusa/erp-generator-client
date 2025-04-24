import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { CurrentUserResponseDto } from '../../models/current-user-response-dto';
export interface AuthProtectedControllerGetMe$Params {
}
export declare function authProtectedControllerGetMe(http: HttpClient, rootUrl: string, params?: AuthProtectedControllerGetMe$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrentUserResponseDto>>;
export declare namespace authProtectedControllerGetMe {
    var PATH: string;
}
