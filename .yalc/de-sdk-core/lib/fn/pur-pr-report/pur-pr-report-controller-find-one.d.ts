import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrReportDto } from '../../models/amims-pur-pr-report-dto';
export interface PurPrReportControllerFindOne$Params {
    id: string;
}
export declare function purPrReportControllerFindOne(http: HttpClient, rootUrl: string, params: PurPrReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrReportDto;
}>>;
export declare namespace purPrReportControllerFindOne {
    var PATH: string;
}
