import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLifeTimeLimitReportDto } from '../../models/amims-life-time-limit-report-dto';
export interface LifeTimeLimitReportControllerFindOne$Params {
    id: string;
}
export declare function lifeTimeLimitReportControllerFindOne(http: HttpClient, rootUrl: string, params: LifeTimeLimitReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLifeTimeLimitReportDto;
}>>;
export declare namespace lifeTimeLimitReportControllerFindOne {
    var PATH: string;
}
