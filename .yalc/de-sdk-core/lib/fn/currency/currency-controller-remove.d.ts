import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsCurrencyDto } from '../../models/amims-currency-dto';
export interface CurrencyControllerRemove$Params {
    id: string;
}
export declare function currencyControllerRemove(http: HttpClient, rootUrl: string, params: CurrencyControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsCurrencyDto;
}>>;
export declare namespace currencyControllerRemove {
    var PATH: string;
}
