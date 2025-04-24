import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsShippingReportDto } from '../../models/amims-shipping-report-dto';
export interface ShippingReportControllerFindOne$Params {
    id: string;
}
export declare function shippingReportControllerFindOne(http: HttpClient, rootUrl: string, params: ShippingReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsShippingReportDto;
}>>;
export declare namespace shippingReportControllerFindOne {
    var PATH: string;
}
