import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTypeOfworkReportDto } from '../models/amims-type-ofwork-report-dto';
import { TypeOfworkReportControllerFindAll$Params } from '../fn/type-ofwork-report/type-ofwork-report-controller-find-all';
import { TypeOfworkReportControllerFindOne$Params } from '../fn/type-ofwork-report/type-ofwork-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class TypeOfworkReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `typeOfworkReportControllerFindAll()` */
    static readonly TypeOfworkReportControllerFindAllPath = "/amims/type_ofwork/type_ofwork_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `typeOfworkReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    typeOfworkReportControllerFindAll$Response(params: TypeOfworkReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTypeOfworkReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `typeOfworkReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    typeOfworkReportControllerFindAll(params: TypeOfworkReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTypeOfworkReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `typeOfworkReportControllerFindOne()` */
    static readonly TypeOfworkReportControllerFindOnePath = "/amims/type_ofwork/type_ofwork_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `typeOfworkReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    typeOfworkReportControllerFindOne$Response(params: TypeOfworkReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTypeOfworkReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `typeOfworkReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    typeOfworkReportControllerFindOne(params: TypeOfworkReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTypeOfworkReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TypeOfworkReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TypeOfworkReportService>;
}
