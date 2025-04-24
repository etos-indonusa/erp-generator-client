import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDetailReportDto } from '../../models/amims-td-detail-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface TdDetailReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function tdDetailReportControllerFindAll(http: HttpClient, rootUrl: string, params: TdDetailReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTdDetailReportDto>;
    'total'?: number;
}>>;
export declare namespace tdDetailReportControllerFindAll {
    var PATH: string;
}
