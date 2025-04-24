import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurReturnItemReportDto } from '../../models/amims-pur-return-item-report-dto';
export interface PurReturnItemReportControllerFindOne$Params {
    id: string;
}
export declare function purReturnItemReportControllerFindOne(http: HttpClient, rootUrl: string, params: PurReturnItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurReturnItemReportDto;
}>>;
export declare namespace purReturnItemReportControllerFindOne {
    var PATH: string;
}
