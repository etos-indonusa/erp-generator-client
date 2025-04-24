import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcJoOperatorDto } from '../../models/amims-mpc-jo-operator-dto';
export interface MpcJoOperatorControllerCreate$Params {
    body: AmimsMpcJoOperatorDto;
}
export declare function mpcJoOperatorControllerCreate(http: HttpClient, rootUrl: string, params: MpcJoOperatorControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcJoOperatorDto;
}>>;
export declare namespace mpcJoOperatorControllerCreate {
    var PATH: string;
}
