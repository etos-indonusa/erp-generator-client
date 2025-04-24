import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorReportDto } from '../../models/amims-pur-vendor-report-dto';
export interface PurVendorReportControllerFindOne$Params {
    id: string;
}
export declare function purVendorReportControllerFindOne(http: HttpClient, rootUrl: string, params: PurVendorReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorReportDto;
}>>;
export declare namespace purVendorReportControllerFindOne {
    var PATH: string;
}
