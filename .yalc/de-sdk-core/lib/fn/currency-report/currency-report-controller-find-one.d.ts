import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsCurrencyReportDto } from '../../models/amims-currency-report-dto';
export interface CurrencyReportControllerFindOne$Params {
    id: string;
}
export declare function currencyReportControllerFindOne(http: HttpClient, rootUrl: string, params: CurrencyReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsCurrencyReportDto;
}>>;
export declare namespace currencyReportControllerFindOne {
    var PATH: string;
}
