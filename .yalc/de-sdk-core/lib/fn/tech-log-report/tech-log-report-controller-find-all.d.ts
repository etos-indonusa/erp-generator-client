import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogReportDto } from '../../models/amims-tech-log-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface TechLogReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function techLogReportControllerFindAll(http: HttpClient, rootUrl: string, params: TechLogReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTechLogReportDto>;
    'total'?: number;
}>>;
export declare namespace techLogReportControllerFindAll {
    var PATH: string;
}
