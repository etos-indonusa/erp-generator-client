import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrclReportDto } from '../../models/amims-pur-prcl-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PurPrclReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function purPrclReportControllerFindAll(http: HttpClient, rootUrl: string, params: PurPrclReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurPrclReportDto>;
    'total'?: number;
}>>;
export declare namespace purPrclReportControllerFindAll {
    var PATH: string;
}
