import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnDto } from '../../models/amims-internal-grn-dto';
export interface InternalGrnControllerCreate$Params {
    body: AmimsInternalGrnDto;
}
export declare function internalGrnControllerCreate(http: HttpClient, rootUrl: string, params: InternalGrnControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInternalGrnDto;
}>>;
export declare namespace internalGrnControllerCreate {
    var PATH: string;
}
