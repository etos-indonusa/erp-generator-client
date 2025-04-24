import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineReportDto } from '../../models/amims-tech-log-engine-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface TechLogEngineReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function techLogEngineReportControllerFindAll(http: HttpClient, rootUrl: string, params: TechLogEngineReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTechLogEngineReportDto>;
    'total'?: number;
}>>;
export declare namespace techLogEngineReportControllerFindAll {
    var PATH: string;
}
