import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogItemReportDto } from '../../models/amims-tech-log-item-report-dto';
export interface TechLogItemReportControllerFindOne$Params {
    id: string;
}
export declare function techLogItemReportControllerFindOne(http: HttpClient, rootUrl: string, params: TechLogItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogItemReportDto;
}>>;
export declare namespace techLogItemReportControllerFindOne {
    var PATH: string;
}
