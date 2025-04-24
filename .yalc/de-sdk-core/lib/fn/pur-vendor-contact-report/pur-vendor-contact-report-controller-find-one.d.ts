import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorContactReportDto } from '../../models/amims-pur-vendor-contact-report-dto';
export interface PurVendorContactReportControllerFindOne$Params {
    id: string;
}
export declare function purVendorContactReportControllerFindOne(http: HttpClient, rootUrl: string, params: PurVendorContactReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorContactReportDto;
}>>;
export declare namespace purVendorContactReportControllerFindOne {
    var PATH: string;
}
