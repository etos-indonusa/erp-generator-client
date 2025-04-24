import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnItemDto } from '../../models/amims-internal-grn-item-dto';
export interface InternalGrnItemControllerUpdate$Params {
    id: string;
    body: AmimsInternalGrnItemDto;
}
export declare function internalGrnItemControllerUpdate(http: HttpClient, rootUrl: string, params: InternalGrnItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInternalGrnItemDto;
}>>;
export declare namespace internalGrnItemControllerUpdate {
    var PATH: string;
}
