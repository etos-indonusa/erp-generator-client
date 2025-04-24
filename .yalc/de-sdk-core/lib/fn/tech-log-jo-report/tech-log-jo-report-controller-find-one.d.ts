import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogJoReportDto } from '../../models/amims-tech-log-jo-report-dto';
export interface TechLogJoReportControllerFindOne$Params {
    id: string;
}
export declare function techLogJoReportControllerFindOne(http: HttpClient, rootUrl: string, params: TechLogJoReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogJoReportDto;
}>>;
export declare namespace techLogJoReportControllerFindOne {
    var PATH: string;
}
