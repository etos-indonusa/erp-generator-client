import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcJoDto } from '../../models/amims-mpc-jo-dto';
export interface MpcJoControllerUpdate$Params {
    id: string;
    body: AmimsMpcJoDto;
}
export declare function mpcJoControllerUpdate(http: HttpClient, rootUrl: string, params: MpcJoControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcJoDto;
}>>;
export declare namespace mpcJoControllerUpdate {
    var PATH: string;
}
