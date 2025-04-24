import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnDto } from '../../models/amims-internal-grn-dto';
export interface InternalGrnControllerFindOne$Params {
    id: string;
}
export declare function internalGrnControllerFindOne(http: HttpClient, rootUrl: string, params: InternalGrnControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInternalGrnDto;
}>>;
export declare namespace internalGrnControllerFindOne {
    var PATH: string;
}
