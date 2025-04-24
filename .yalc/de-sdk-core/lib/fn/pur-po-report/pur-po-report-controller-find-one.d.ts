import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPoReportDto } from '../../models/amims-pur-po-report-dto';
export interface PurPoReportControllerFindOne$Params {
    id: string;
}
export declare function purPoReportControllerFindOne(http: HttpClient, rootUrl: string, params: PurPoReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPoReportDto;
}>>;
export declare namespace purPoReportControllerFindOne {
    var PATH: string;
}
