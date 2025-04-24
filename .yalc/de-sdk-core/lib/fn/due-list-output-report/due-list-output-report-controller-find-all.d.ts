import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDueListOutputReportDto } from '../../models/amims-due-list-output-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface DueListOutputReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function dueListOutputReportControllerFindAll(http: HttpClient, rootUrl: string, params: DueListOutputReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsDueListOutputReportDto>;
    'total'?: number;
}>>;
export declare namespace dueListOutputReportControllerFindAll {
    var PATH: string;
}
