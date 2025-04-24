import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AppControllerGetHello$Params } from '../fn/app/app-controller-get-hello';
import * as i0 from "@angular/core";
export declare class AppService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `appControllerGetHello()` */
    static readonly AppControllerGetHelloPath = "/";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `appControllerGetHello()` instead.
     *
     * This method doesn't expect any request body.
     */
    appControllerGetHello$Response(params?: AppControllerGetHello$Params, context?: HttpContext): Observable<StrictHttpResponse<void>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `appControllerGetHello$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    appControllerGetHello(params?: AppControllerGetHello$Params, context?: HttpContext): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppService>;
}
