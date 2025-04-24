import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsCurrencyDto } from '../../models/amims-currency-dto';
export interface CurrencyControllerFindAll$Params {
    pageIndex?: number;
    pageSize?: number;
    /**
     * JSON.stringify({})
     */
    filter?: string;
    sortKey?: string;
    sortValue?: 'asc' | 'desc';
    /**
     * Array of searchable fields
     */
    search_field?: Array<string>;
    search_keyword?: string;
}
export declare function currencyControllerFindAll(http: HttpClient, rootUrl: string, params?: CurrencyControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsCurrencyDto>;
    'total'?: number;
}>>;
export declare namespace currencyControllerFindAll {
    var PATH: string;
}
