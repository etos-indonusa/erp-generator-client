import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsCurrencyDto } from '../../models/amims-currency-dto';
export interface CurrencyControllerCreate$Params {
    body: AmimsCurrencyDto;
}
export declare function currencyControllerCreate(http: HttpClient, rootUrl: string, params: CurrencyControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsCurrencyDto;
}>>;
export declare namespace currencyControllerCreate {
    var PATH: string;
}
