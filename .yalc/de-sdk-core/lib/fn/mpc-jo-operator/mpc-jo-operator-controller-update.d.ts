import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcJoOperatorDto } from '../../models/amims-mpc-jo-operator-dto';
export interface MpcJoOperatorControllerUpdate$Params {
    id: string;
    body: AmimsMpcJoOperatorDto;
}
export declare function mpcJoOperatorControllerUpdate(http: HttpClient, rootUrl: string, params: MpcJoOperatorControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcJoOperatorDto;
}>>;
export declare namespace mpcJoOperatorControllerUpdate {
    var PATH: string;
}
