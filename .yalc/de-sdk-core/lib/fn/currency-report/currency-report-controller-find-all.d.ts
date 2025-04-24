import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsCurrencyReportDto } from '../../models/amims-currency-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface CurrencyReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function currencyReportControllerFindAll(http: HttpClient, rootUrl: string, params: CurrencyReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsCurrencyReportDto>;
    'total'?: number;
}>>;
export declare namespace currencyReportControllerFindAll {
    var PATH: string;
}
