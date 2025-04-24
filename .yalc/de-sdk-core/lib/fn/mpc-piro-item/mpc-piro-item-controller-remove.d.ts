import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcPiroItemDto } from '../../models/amims-mpc-piro-item-dto';
export interface MpcPiroItemControllerRemove$Params {
    id: string;
}
export declare function mpcPiroItemControllerRemove(http: HttpClient, rootUrl: string, params: MpcPiroItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcPiroItemDto;
}>>;
export declare namespace mpcPiroItemControllerRemove {
    var PATH: string;
}
