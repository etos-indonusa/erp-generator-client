import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrReportDto } from '../../models/amims-pur-pr-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PurPrReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function purPrReportControllerFindAll(http: HttpClient, rootUrl: string, params: PurPrReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurPrReportDto>;
    'total'?: number;
}>>;
export declare namespace purPrReportControllerFindAll {
    var PATH: string;
}
