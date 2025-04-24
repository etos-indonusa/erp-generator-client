import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorItemReportDto } from '../../models/amims-pur-vendor-item-report-dto';
export interface PurVendorItemReportControllerFindOne$Params {
    id: string;
}
export declare function purVendorItemReportControllerFindOne(http: HttpClient, rootUrl: string, params: PurVendorItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorItemReportDto;
}>>;
export declare namespace purVendorItemReportControllerFindOne {
    var PATH: string;
}
