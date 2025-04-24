import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorItemDto } from '../../models/amims-pur-vendor-item-dto';
export interface PurVendorItemControllerCreate$Params {
    body: AmimsPurVendorItemDto;
}
export declare function purVendorItemControllerCreate(http: HttpClient, rootUrl: string, params: PurVendorItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorItemDto;
}>>;
export declare namespace purVendorItemControllerCreate {
    var PATH: string;
}
