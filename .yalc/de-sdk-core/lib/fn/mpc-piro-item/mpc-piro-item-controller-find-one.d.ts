import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcPiroItemDto } from '../../models/amims-mpc-piro-item-dto';
export interface MpcPiroItemControllerFindOne$Params {
    id: string;
}
export declare function mpcPiroItemControllerFindOne(http: HttpClient, rootUrl: string, params: MpcPiroItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcPiroItemDto;
}>>;
export declare namespace mpcPiroItemControllerFindOne {
    var PATH: string;
}
