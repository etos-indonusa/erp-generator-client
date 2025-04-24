import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsSiteReportDto } from '../../models/amims-site-report-dto';
export interface SiteReportControllerFindOne$Params {
    id: string;
}
export declare function siteReportControllerFindOne(http: HttpClient, rootUrl: string, params: SiteReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsSiteReportDto;
}>>;
export declare namespace siteReportControllerFindOne {
    var PATH: string;
}
