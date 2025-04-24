import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPoItemReportDto } from '../../models/amims-pur-po-item-report-dto';
export interface PurPoItemReportControllerFindOne$Params {
    id: string;
}
export declare function purPoItemReportControllerFindOne(http: HttpClient, rootUrl: string, params: PurPoItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPoItemReportDto;
}>>;
export declare namespace purPoItemReportControllerFindOne {
    var PATH: string;
}
