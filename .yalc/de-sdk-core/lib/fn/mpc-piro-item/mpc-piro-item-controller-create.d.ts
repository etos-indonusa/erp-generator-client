import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcPiroItemDto } from '../../models/amims-mpc-piro-item-dto';
export interface MpcPiroItemControllerCreate$Params {
    body: AmimsMpcPiroItemDto;
}
export declare function mpcPiroItemControllerCreate(http: HttpClient, rootUrl: string, params: MpcPiroItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcPiroItemDto;
}>>;
export declare namespace mpcPiroItemControllerCreate {
    var PATH: string;
}
