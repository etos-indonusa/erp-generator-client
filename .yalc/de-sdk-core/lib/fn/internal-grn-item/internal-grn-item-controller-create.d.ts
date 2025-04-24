import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnItemDto } from '../../models/amims-internal-grn-item-dto';
export interface InternalGrnItemControllerCreate$Params {
    body: AmimsInternalGrnItemDto;
}
export declare function internalGrnItemControllerCreate(http: HttpClient, rootUrl: string, params: InternalGrnItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInternalGrnItemDto;
}>>;
export declare namespace internalGrnItemControllerCreate {
    var PATH: string;
}
