import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ResetPasswordDto } from '../../models/reset-password-dto';
import { SimpleMessageDto } from '../../models/simple-message-dto';
export interface AuthControllerResetPassword$Params {
    body: ResetPasswordDto;
}
export declare function authControllerResetPassword(http: HttpClient, rootUrl: string, params: AuthControllerResetPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<SimpleMessageDto>>;
export declare namespace authControllerResetPassword {
    var PATH: string;
}
