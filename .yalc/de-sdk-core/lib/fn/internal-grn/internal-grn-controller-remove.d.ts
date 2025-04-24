import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnDto } from '../../models/amims-internal-grn-dto';
export interface InternalGrnControllerRemove$Params {
    id: string;
}
export declare function internalGrnControllerRemove(http: HttpClient, rootUrl: string, params: InternalGrnControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInternalGrnDto;
}>>;
export declare namespace internalGrnControllerRemove {
    var PATH: string;
}
