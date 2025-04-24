import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { SimpleMessageDto } from '../../models/simple-message-dto';
export interface AuthProtectedControllerLogout$Params {
}
export declare function authProtectedControllerLogout(http: HttpClient, rootUrl: string, params?: AuthProtectedControllerLogout$Params, context?: HttpContext): Observable<StrictHttpResponse<SimpleMessageDto>>;
export declare namespace authProtectedControllerLogout {
    var PATH: string;
}
