import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechDiscrepanciesReportDto } from '../../models/amims-tech-discrepancies-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface TechDiscrepanciesReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function techDiscrepanciesReportControllerFindAll(http: HttpClient, rootUrl: string, params: TechDiscrepanciesReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTechDiscrepanciesReportDto>;
    'total'?: number;
}>>;
export declare namespace techDiscrepanciesReportControllerFindAll {
    var PATH: string;
}
