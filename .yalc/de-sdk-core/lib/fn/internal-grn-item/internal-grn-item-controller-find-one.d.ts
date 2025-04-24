import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnItemDto } from '../../models/amims-internal-grn-item-dto';
export interface InternalGrnItemControllerFindOne$Params {
    id: string;
}
export declare function internalGrnItemControllerFindOne(http: HttpClient, rootUrl: string, params: InternalGrnItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsInternalGrnItemDto;
}>>;
export declare namespace internalGrnItemControllerFindOne {
    var PATH: string;
}
