import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorContactDto } from '../../models/amims-pur-vendor-contact-dto';
export interface PurVendorContactControllerUpdate$Params {
    id: string;
    body: AmimsPurVendorContactDto;
}
export declare function purVendorContactControllerUpdate(http: HttpClient, rootUrl: string, params: PurVendorContactControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorContactDto;
}>>;
export declare namespace purVendorContactControllerUpdate {
    var PATH: string;
}
