import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrItemReportDto } from '../../models/amims-pur-pr-item-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PurPrItemReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function purPrItemReportControllerFindAll(http: HttpClient, rootUrl: string, params: PurPrItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurPrItemReportDto>;
    'total'?: number;
}>>;
export declare namespace purPrItemReportControllerFindAll {
    var PATH: string;
}
