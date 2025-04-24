import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPoItemReportDto } from '../../models/amims-pur-po-item-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PurPoItemReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function purPoItemReportControllerFindAll(http: HttpClient, rootUrl: string, params: PurPoItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurPoItemReportDto>;
    'total'?: number;
}>>;
export declare namespace purPoItemReportControllerFindAll {
    var PATH: string;
}
