import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdReportDto } from '../../models/amims-td-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface TdReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function tdReportControllerFindAll(http: HttpClient, rootUrl: string, params: TdReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTdReportDto>;
    'total'?: number;
}>>;
export declare namespace tdReportControllerFindAll {
    var PATH: string;
}
