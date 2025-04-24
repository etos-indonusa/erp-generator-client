import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTypeOfworkDto } from '../models/amims-type-ofwork-dto';
import { TypeOfworkControllerCreate$Params } from '../fn/type-ofwork/type-ofwork-controller-create';
import { TypeOfworkControllerFindAll$Params } from '../fn/type-ofwork/type-ofwork-controller-find-all';
import { TypeOfworkControllerFindOne$Params } from '../fn/type-ofwork/type-ofwork-controller-find-one';
import { TypeOfworkControllerRemove$Params } from '../fn/type-ofwork/type-ofwork-controller-remove';
import { TypeOfworkControllerUpdate$Params } from '../fn/type-ofwork/type-ofwork-controller-update';
import * as i0 from "@angular/core";
export declare class TypeOfworkService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `typeOfworkControllerFindAll()` */
    static readonly TypeOfworkControllerFindAllPath = "/amims/type_ofwork/type_ofwork";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `typeOfworkControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    typeOfworkControllerFindAll$Response(params?: TypeOfworkControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTypeOfworkDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `typeOfworkControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    typeOfworkControllerFindAll(params?: TypeOfworkControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTypeOfworkDto>;
        'total'?: number;
    }>;
    /** Path part for operation `typeOfworkControllerCreate()` */
    static readonly TypeOfworkControllerCreatePath = "/amims/type_ofwork/type_ofwork";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `typeOfworkControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    typeOfworkControllerCreate$Response(params: TypeOfworkControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTypeOfworkDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `typeOfworkControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    typeOfworkControllerCreate(params: TypeOfworkControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTypeOfworkDto;
    }>;
    /** Path part for operation `typeOfworkControllerFindOne()` */
    static readonly TypeOfworkControllerFindOnePath = "/amims/type_ofwork/type_ofwork/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `typeOfworkControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    typeOfworkControllerFindOne$Response(params: TypeOfworkControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTypeOfworkDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `typeOfworkControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    typeOfworkControllerFindOne(params: TypeOfworkControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTypeOfworkDto;
    }>;
    /** Path part for operation `typeOfworkControllerUpdate()` */
    static readonly TypeOfworkControllerUpdatePath = "/amims/type_ofwork/type_ofwork/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `typeOfworkControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    typeOfworkControllerUpdate$Response(params: TypeOfworkControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTypeOfworkDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `typeOfworkControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    typeOfworkControllerUpdate(params: TypeOfworkControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTypeOfworkDto;
    }>;
    /** Path part for operation `typeOfworkControllerRemove()` */
    static readonly TypeOfworkControllerRemovePath = "/amims/type_ofwork/type_ofwork/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `typeOfworkControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    typeOfworkControllerRemove$Response(params: TypeOfworkControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTypeOfworkDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `typeOfworkControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    typeOfworkControllerRemove(params: TypeOfworkControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTypeOfworkDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TypeOfworkService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TypeOfworkService>;
}
