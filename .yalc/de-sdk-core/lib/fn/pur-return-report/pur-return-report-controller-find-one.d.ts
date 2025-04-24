import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurReturnReportDto } from '../../models/amims-pur-return-report-dto';
export interface PurReturnReportControllerFindOne$Params {
    id: string;
}
export declare function purReturnReportControllerFindOne(http: HttpClient, rootUrl: string, params: PurReturnReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurReturnReportDto;
}>>;
export declare namespace purReturnReportControllerFindOne {
    var PATH: string;
}
