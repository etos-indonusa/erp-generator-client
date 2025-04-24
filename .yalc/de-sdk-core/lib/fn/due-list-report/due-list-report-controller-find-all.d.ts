import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDueListReportDto } from '../../models/amims-due-list-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface DueListReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function dueListReportControllerFindAll(http: HttpClient, rootUrl: string, params: DueListReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsDueListReportDto>;
    'total'?: number;
}>>;
export declare namespace dueListReportControllerFindAll {
    var PATH: string;
}
