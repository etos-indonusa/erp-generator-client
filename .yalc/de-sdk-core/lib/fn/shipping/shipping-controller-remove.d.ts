import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsShippingDto } from '../../models/amims-shipping-dto';
export interface ShippingControllerRemove$Params {
    id: string;
}
export declare function shippingControllerRemove(http: HttpClient, rootUrl: string, params: ShippingControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsShippingDto;
}>>;
export declare namespace shippingControllerRemove {
    var PATH: string;
}
