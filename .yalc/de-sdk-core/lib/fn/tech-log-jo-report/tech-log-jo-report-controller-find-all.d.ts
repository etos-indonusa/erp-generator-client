import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogJoReportDto } from '../../models/amims-tech-log-jo-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface TechLogJoReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function techLogJoReportControllerFindAll(http: HttpClient, rootUrl: string, params: TechLogJoReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTechLogJoReportDto>;
    'total'?: number;
}>>;
export declare namespace techLogJoReportControllerFindAll {
    var PATH: string;
}
