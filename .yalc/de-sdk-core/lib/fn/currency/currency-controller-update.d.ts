import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsCurrencyDto } from '../../models/amims-currency-dto';
export interface CurrencyControllerUpdate$Params {
    id: string;
    body: AmimsCurrencyDto;
}
export declare function currencyControllerUpdate(http: HttpClient, rootUrl: string, params: CurrencyControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsCurrencyDto;
}>>;
export declare namespace currencyControllerUpdate {
    var PATH: string;
}
