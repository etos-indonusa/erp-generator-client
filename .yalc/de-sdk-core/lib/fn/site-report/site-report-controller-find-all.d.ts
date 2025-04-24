import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsSiteReportDto } from '../../models/amims-site-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface SiteReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function siteReportControllerFindAll(http: HttpClient, rootUrl: string, params: SiteReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsSiteReportDto>;
    'total'?: number;
}>>;
export declare namespace siteReportControllerFindAll {
    var PATH: string;
}
