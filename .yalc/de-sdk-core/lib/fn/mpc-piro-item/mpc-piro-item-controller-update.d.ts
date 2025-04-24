import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcPiroItemDto } from '../../models/amims-mpc-piro-item-dto';
export interface MpcPiroItemControllerUpdate$Params {
    id: string;
    body: AmimsMpcPiroItemDto;
}
export declare function mpcPiroItemControllerUpdate(http: HttpClient, rootUrl: string, params: MpcPiroItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcPiroItemDto;
}>>;
export declare namespace mpcPiroItemControllerUpdate {
    var PATH: string;
}
