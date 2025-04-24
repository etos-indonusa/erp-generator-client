import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorDto } from '../../models/amims-pur-vendor-dto';
export interface PurVendorControllerFindOne$Params {
    id: string;
}
export declare function purVendorControllerFindOne(http: HttpClient, rootUrl: string, params: PurVendorControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurVendorDto;
}>>;
export declare namespace purVendorControllerFindOne {
    var PATH: string;
}
