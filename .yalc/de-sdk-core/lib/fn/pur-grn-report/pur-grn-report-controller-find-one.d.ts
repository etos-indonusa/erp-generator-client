import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurGrnReportDto } from '../../models/amims-pur-grn-report-dto';
export interface PurGrnReportControllerFindOne$Params {
    id: string;
}
export declare function purGrnReportControllerFindOne(http: HttpClient, rootUrl: string, params: PurGrnReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurGrnReportDto;
}>>;
export declare namespace purGrnReportControllerFindOne {
    var PATH: string;
}
