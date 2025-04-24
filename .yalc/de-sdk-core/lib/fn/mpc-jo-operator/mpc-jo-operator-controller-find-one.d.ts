import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcJoOperatorDto } from '../../models/amims-mpc-jo-operator-dto';
export interface MpcJoOperatorControllerFindOne$Params {
    id: string;
}
export declare function mpcJoOperatorControllerFindOne(http: HttpClient, rootUrl: string, params: MpcJoOperatorControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcJoOperatorDto;
}>>;
export declare namespace mpcJoOperatorControllerFindOne {
    var PATH: string;
}
