import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurGrnItemReportDto } from '../../models/amims-pur-grn-item-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PurGrnItemReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function purGrnItemReportControllerFindAll(http: HttpClient, rootUrl: string, params: PurGrnItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurGrnItemReportDto>;
    'total'?: number;
}>>;
export declare namespace purGrnItemReportControllerFindAll {
    var PATH: string;
}
