import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { SimpleMessageDto } from '../../models/simple-message-dto';
export interface AuthControllerLogout$Params {
}
export declare function authControllerLogout(http: HttpClient, rootUrl: string, params?: AuthControllerLogout$Params, context?: HttpContext): Observable<StrictHttpResponse<SimpleMessageDto>>;
export declare namespace authControllerLogout {
    var PATH: string;
}
