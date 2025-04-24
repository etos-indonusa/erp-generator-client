import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcPiroDto } from '../../models/amims-mpc-piro-dto';
export interface MpcPiroControllerRemove$Params {
    id: string;
}
export declare function mpcPiroControllerRemove(http: HttpClient, rootUrl: string, params: MpcPiroControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcPiroDto;
}>>;
export declare namespace mpcPiroControllerRemove {
    var PATH: string;
}
