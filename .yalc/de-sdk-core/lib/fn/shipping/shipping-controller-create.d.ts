import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsShippingDto } from '../../models/amims-shipping-dto';
export interface ShippingControllerCreate$Params {
    body: AmimsShippingDto;
}
export declare function shippingControllerCreate(http: HttpClient, rootUrl: string, params: ShippingControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsShippingDto;
}>>;
export declare namespace shippingControllerCreate {
    var PATH: string;
}
