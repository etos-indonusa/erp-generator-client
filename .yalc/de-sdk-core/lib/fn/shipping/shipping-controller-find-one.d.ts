import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsShippingDto } from '../../models/amims-shipping-dto';
export interface ShippingControllerFindOne$Params {
    id: string;
}
export declare function shippingControllerFindOne(http: HttpClient, rootUrl: string, params: ShippingControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsShippingDto;
}>>;
export declare namespace shippingControllerFindOne {
    var PATH: string;
}
