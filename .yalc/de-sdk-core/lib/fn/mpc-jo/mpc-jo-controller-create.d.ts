import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcJoDto } from '../../models/amims-mpc-jo-dto';
export interface MpcJoControllerCreate$Params {
    body: AmimsMpcJoDto;
}
export declare function mpcJoControllerCreate(http: HttpClient, rootUrl: string, params: MpcJoControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcJoDto;
}>>;
export declare namespace mpcJoControllerCreate {
    var PATH: string;
}
