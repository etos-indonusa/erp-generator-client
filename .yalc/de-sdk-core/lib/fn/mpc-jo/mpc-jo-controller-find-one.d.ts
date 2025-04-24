import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcJoDto } from '../../models/amims-mpc-jo-dto';
export interface MpcJoControllerFindOne$Params {
    id: string;
}
export declare function mpcJoControllerFindOne(http: HttpClient, rootUrl: string, params: MpcJoControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcJoDto;
}>>;
export declare namespace mpcJoControllerFindOne {
    var PATH: string;
}
