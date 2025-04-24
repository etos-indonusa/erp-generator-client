import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsCurrencyDto } from '../../models/amims-currency-dto';
export interface CurrencyControllerFindOne$Params {
    id: string;
}
export declare function currencyControllerFindOne(http: HttpClient, rootUrl: string, params: CurrencyControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsCurrencyDto;
}>>;
export declare namespace currencyControllerFindOne {
    var PATH: string;
}
