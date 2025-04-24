import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogItemReportDto } from '../../models/amims-tech-log-item-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface TechLogItemReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function techLogItemReportControllerFindAll(http: HttpClient, rootUrl: string, params: TechLogItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTechLogItemReportDto>;
    'total'?: number;
}>>;
export declare namespace techLogItemReportControllerFindAll {
    var PATH: string;
}
