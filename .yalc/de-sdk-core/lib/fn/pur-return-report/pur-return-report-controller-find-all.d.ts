import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurReturnReportDto } from '../../models/amims-pur-return-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PurReturnReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function purReturnReportControllerFindAll(http: HttpClient, rootUrl: string, params: PurReturnReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurReturnReportDto>;
    'total'?: number;
}>>;
export declare namespace purReturnReportControllerFindAll {
    var PATH: string;
}
