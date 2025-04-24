import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorDto } from '../../models/amims-pur-vendor-dto';
export interface PurVendorControllerRemove$Params {
    id: string;
}
export declare function purVendorControllerRemove(http: HttpClient, rootUrl: string, params: PurVendorControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorDto;
}>>;
export declare namespace purVendorControllerRemove {
    var PATH: string;
}
