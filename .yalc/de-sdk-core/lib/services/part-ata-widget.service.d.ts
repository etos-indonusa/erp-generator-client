import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartAtaWidgetDto } from '../models/amims-part-ata-widget-dto';
import { PartAtaWidgetControllerFindAll$Params } from '../fn/part-ata-widget/part-ata-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PartAtaWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partAtaWidgetControllerFindAll()` */
    static readonly PartAtaWidgetControllerFindAllPath = "/amims/part_ata/part_ata_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAtaWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAtaWidgetControllerFindAll$Response(params: PartAtaWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartAtaWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAtaWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAtaWidgetControllerFindAll(params: PartAtaWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartAtaWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartAtaWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartAtaWidgetService>;
}
