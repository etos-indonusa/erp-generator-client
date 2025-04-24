import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPoReportDto } from '../../models/amims-pur-po-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PurPoReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function purPoReportControllerFindAll(http: HttpClient, rootUrl: string, params: PurPoReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurPoReportDto>;
    'total'?: number;
}>>;
export declare namespace purPoReportControllerFindAll {
    var PATH: string;
}
