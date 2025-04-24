import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorItemDto } from '../../models/amims-pur-vendor-item-dto';
export interface PurVendorItemControllerFindOne$Params {
    id: string;
}
export declare function purVendorItemControllerFindOne(http: HttpClient, rootUrl: string, params: PurVendorItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorItemDto;
}>>;
export declare namespace purVendorItemControllerFindOne {
    var PATH: string;
}
