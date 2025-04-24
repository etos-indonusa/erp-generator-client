import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AuthResponseDto } from '../../models/auth-response-dto';
import { LoginDto } from '../../models/login-dto';
export interface AuthControllerLogin$Params {
    body: LoginDto;
}
export declare function authControllerLogin(http: HttpClient, rootUrl: string, params: AuthControllerLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthResponseDto>>;
export declare namespace authControllerLogin {
    var PATH: string;
}
