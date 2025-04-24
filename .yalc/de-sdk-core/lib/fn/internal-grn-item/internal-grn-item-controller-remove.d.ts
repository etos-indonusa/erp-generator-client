import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnItemDto } from '../../models/amims-internal-grn-item-dto';
export interface InternalGrnItemControllerRemove$Params {
    id: string;
}
export declare function internalGrnItemControllerRemove(http: HttpClient, rootUrl: string, params: InternalGrnItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInternalGrnItemDto;
}>>;
export declare namespace internalGrnItemControllerRemove {
    var PATH: string;
}
