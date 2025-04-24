import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineReportDto } from '../../models/amims-tech-log-engine-report-dto';
export interface TechLogEngineReportControllerFindOne$Params {
    id: string;
}
export declare function techLogEngineReportControllerFindOne(http: HttpClient, rootUrl: string, params: TechLogEngineReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogEngineReportDto;
}>>;
export declare namespace techLogEngineReportControllerFindOne {
    var PATH: string;
}
