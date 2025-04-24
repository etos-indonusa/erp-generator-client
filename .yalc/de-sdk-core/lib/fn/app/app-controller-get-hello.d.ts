import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
export interface AppControllerGetHello$Params {
}
export declare function appControllerGetHello(http: HttpClient, rootUrl: string, params?: AppControllerGetHello$Params, context?: HttpContext): Observable<StrictHttpResponse<void>>;
export declare namespace appControllerGetHello {
    var PATH: string;
}
