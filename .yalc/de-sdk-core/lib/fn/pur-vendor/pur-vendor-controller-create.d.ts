import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorDto } from '../../models/amims-pur-vendor-dto';
export interface PurVendorControllerCreate$Params {
    body: AmimsPurVendorDto;
}
export declare function purVendorControllerCreate(http: HttpClient, rootUrl: string, params: PurVendorControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorDto;
}>>;
export declare namespace purVendorControllerCreate {
    var PATH: string;
}
