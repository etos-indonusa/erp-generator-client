import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurGrnItemReportDto } from '../../models/amims-pur-grn-item-report-dto';
export interface PurGrnItemReportControllerFindOne$Params {
    id: string;
}
export declare function purGrnItemReportControllerFindOne(http: HttpClient, rootUrl: string, params: PurGrnItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurGrnItemReportDto;
}>>;
export declare namespace purGrnItemReportControllerFindOne {
    var PATH: string;
}
