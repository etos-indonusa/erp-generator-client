import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartInstallWidgetDto } from '../models/amims-part-install-widget-dto';
import { PartInstallWidgetControllerFindAll$Params } from '../fn/part-install-widget/part-install-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PartInstallWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partInstallWidgetControllerFindAll()` */
    static readonly PartInstallWidgetControllerFindAllPath = "/amims/part_install/part_install_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallWidgetControllerFindAll$Response(params: PartInstallWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartInstallWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallWidgetControllerFindAll(params: PartInstallWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartInstallWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartInstallWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartInstallWidgetService>;
}
