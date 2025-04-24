import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurGrnReportDto } from '../../models/amims-pur-grn-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PurGrnReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function purGrnReportControllerFindAll(http: HttpClient, rootUrl: string, params: PurGrnReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurGrnReportDto>;
    'total'?: number;
}>>;
export declare namespace purGrnReportControllerFindAll {
    var PATH: string;
}
