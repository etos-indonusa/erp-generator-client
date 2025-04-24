import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechDiscrepanciesReportDto } from '../../models/amims-tech-discrepancies-report-dto';
export interface TechDiscrepanciesReportControllerFindOne$Params {
    id: string;
}
export declare function techDiscrepanciesReportControllerFindOne(http: HttpClient, rootUrl: string, params: TechDiscrepanciesReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechDiscrepanciesReportDto;
}>>;
export declare namespace techDiscrepanciesReportControllerFindOne {
    var PATH: string;
}
