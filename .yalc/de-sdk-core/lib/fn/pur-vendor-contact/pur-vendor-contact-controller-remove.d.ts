import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorContactDto } from '../../models/amims-pur-vendor-contact-dto';
export interface PurVendorContactControllerRemove$Params {
    id: string;
}
export declare function purVendorContactControllerRemove(http: HttpClient, rootUrl: string, params: PurVendorContactControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorContactDto;
}>>;
export declare namespace purVendorContactControllerRemove {
    var PATH: string;
}
