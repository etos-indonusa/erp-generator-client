import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcJoOperatorDto } from '../../models/amims-mpc-jo-operator-dto';
export interface MpcJoOperatorControllerRemove$Params {
    id: string;
}
export declare function mpcJoOperatorControllerRemove(http: HttpClient, rootUrl: string, params: MpcJoOperatorControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcJoOperatorDto;
}>>;
export declare namespace mpcJoOperatorControllerRemove {
    var PATH: string;
}
