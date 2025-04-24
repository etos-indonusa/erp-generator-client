import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorContactDto } from '../../models/amims-pur-vendor-contact-dto';
export interface PurVendorContactControllerCreate$Params {
    body: AmimsPurVendorContactDto;
}
export declare function purVendorContactControllerCreate(http: HttpClient, rootUrl: string, params: PurVendorContactControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorContactDto;
}>>;
export declare namespace purVendorContactControllerCreate {
    var PATH: string;
}
