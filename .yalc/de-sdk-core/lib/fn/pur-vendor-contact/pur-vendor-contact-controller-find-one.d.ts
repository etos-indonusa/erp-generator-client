import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorContactDto } from '../../models/amims-pur-vendor-contact-dto';
export interface PurVendorContactControllerFindOne$Params {
    id: string;
}
export declare function purVendorContactControllerFindOne(http: HttpClient, rootUrl: string, params: PurVendorContactControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorContactDto;
}>>;
export declare namespace purVendorContactControllerFindOne {
    var PATH: string;
}
