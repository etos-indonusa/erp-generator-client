import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnDto } from '../../models/amims-internal-grn-dto';
export interface InternalGrnControllerUpdate$Params {
    id: string;
    body: AmimsInternalGrnDto;
}
export declare function internalGrnControllerUpdate(http: HttpClient, rootUrl: string, params: InternalGrnControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInternalGrnDto;
}>>;
export declare namespace internalGrnControllerUpdate {
    var PATH: string;
}
