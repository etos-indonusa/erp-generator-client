import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcJoDto } from '../../models/amims-mpc-jo-dto';
export interface MpcJoControllerRemove$Params {
    id: string;
}
export declare function mpcJoControllerRemove(http: HttpClient, rootUrl: string, params: MpcJoControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcJoDto;
}>>;
export declare namespace mpcJoControllerRemove {
    var PATH: string;
}
