import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorDto } from '../../models/amims-pur-vendor-dto';
export interface PurVendorControllerUpdate$Params {
    id: string;
    body: AmimsPurVendorDto;
}
export declare function purVendorControllerUpdate(http: HttpClient, rootUrl: string, params: PurVendorControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorDto;
}>>;
export declare namespace purVendorControllerUpdate {
    var PATH: string;
}
