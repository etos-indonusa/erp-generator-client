import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechDefectReportDto } from '../../models/amims-tech-defect-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface TechDefectReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function techDefectReportControllerFindAll(http: HttpClient, rootUrl: string, params: TechDefectReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTechDefectReportDto>;
    'total'?: number;
}>>;
export declare namespace techDefectReportControllerFindAll {
    var PATH: string;
}
