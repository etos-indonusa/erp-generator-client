import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineCheckReportDto } from '../../models/amims-tech-log-engine-check-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface TechLogEngineCheckReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function techLogEngineCheckReportControllerFindAll(http: HttpClient, rootUrl: string, params: TechLogEngineCheckReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTechLogEngineCheckReportDto>;
    'total'?: number;
}>>;
export declare namespace techLogEngineCheckReportControllerFindAll {
    var PATH: string;
}
