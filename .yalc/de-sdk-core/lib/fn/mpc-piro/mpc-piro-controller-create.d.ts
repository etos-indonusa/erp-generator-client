import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcPiroDto } from '../../models/amims-mpc-piro-dto';
export interface MpcPiroControllerCreate$Params {
    body: AmimsMpcPiroDto;
}
export declare function mpcPiroControllerCreate(http: HttpClient, rootUrl: string, params: MpcPiroControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcPiroDto;
}>>;
export declare namespace mpcPiroControllerCreate {
    var PATH: string;
}
