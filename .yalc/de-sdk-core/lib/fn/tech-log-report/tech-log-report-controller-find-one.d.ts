import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogReportDto } from '../../models/amims-tech-log-report-dto';
export interface TechLogReportControllerFindOne$Params {
    id: string;
}
export declare function techLogReportControllerFindOne(http: HttpClient, rootUrl: string, params: TechLogReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogReportDto;
}>>;
export declare namespace techLogReportControllerFindOne {
    var PATH: string;
}
