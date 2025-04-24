import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLifeTimeLimitReportDto } from '../../models/amims-life-time-limit-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface LifeTimeLimitReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function lifeTimeLimitReportControllerFindAll(http: HttpClient, rootUrl: string, params: LifeTimeLimitReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsLifeTimeLimitReportDto>;
    'total'?: number;
}>>;
export declare namespace lifeTimeLimitReportControllerFindAll {
    var PATH: string;
}
