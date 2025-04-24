import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorItemDto } from '../../models/amims-pur-vendor-item-dto';
export interface PurVendorItemControllerUpdate$Params {
    id: string;
    body: AmimsPurVendorItemDto;
}
export declare function purVendorItemControllerUpdate(http: HttpClient, rootUrl: string, params: PurVendorItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorItemDto;
}>>;
export declare namespace purVendorItemControllerUpdate {
    var PATH: string;
}
