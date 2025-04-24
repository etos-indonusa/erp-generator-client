import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineCheckReportDto } from '../../models/amims-tech-log-engine-check-report-dto';
export interface TechLogEngineCheckReportControllerFindOne$Params {
    id: string;
}
export declare function techLogEngineCheckReportControllerFindOne(http: HttpClient, rootUrl: string, params: TechLogEngineCheckReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogEngineCheckReportDto;
}>>;
export declare namespace techLogEngineCheckReportControllerFindOne {
    var PATH: string;
}
