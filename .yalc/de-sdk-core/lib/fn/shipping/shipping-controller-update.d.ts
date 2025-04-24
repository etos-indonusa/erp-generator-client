import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsShippingDto } from '../../models/amims-shipping-dto';
export interface ShippingControllerUpdate$Params {
    id: string;
    body: AmimsShippingDto;
}
export declare function shippingControllerUpdate(http: HttpClient, rootUrl: string, params: ShippingControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsShippingDto;
}>>;
export declare namespace shippingControllerUpdate {
    var PATH: string;
}
