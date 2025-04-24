import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorItemDto } from '../../models/amims-pur-vendor-item-dto';
export interface PurVendorItemControllerRemove$Params {
    id: string;
}
export declare function purVendorItemControllerRemove(http: HttpClient, rootUrl: string, params: PurVendorItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorItemDto;
}>>;
export declare namespace purVendorItemControllerRemove {
    var PATH: string;
}
