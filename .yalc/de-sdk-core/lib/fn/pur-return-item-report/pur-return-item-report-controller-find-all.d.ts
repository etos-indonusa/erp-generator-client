import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurReturnItemReportDto } from '../../models/amims-pur-return-item-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PurReturnItemReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function purReturnItemReportControllerFindAll(http: HttpClient, rootUrl: string, params: PurReturnItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurReturnItemReportDto>;
    'total'?: number;
}>>;
export declare namespace purReturnItemReportControllerFindAll {
    var PATH: string;
}
