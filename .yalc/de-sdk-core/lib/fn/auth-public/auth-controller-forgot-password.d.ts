import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { SimpleMessageDto } from '../../models/simple-message-dto';
export interface AuthControllerForgotPassword$Params {
}
export declare function authControllerForgotPassword(http: HttpClient, rootUrl: string, params?: AuthControllerForgotPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<SimpleMessageDto>>;
export declare namespace authControllerForgotPassword {
    var PATH: string;
}
