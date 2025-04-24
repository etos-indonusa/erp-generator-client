import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcPiroDto } from '../../models/amims-mpc-piro-dto';
export interface MpcPiroControllerUpdate$Params {
    id: string;
    body: AmimsMpcPiroDto;
}
export declare function mpcPiroControllerUpdate(http: HttpClient, rootUrl: string, params: MpcPiroControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcPiroDto;
}>>;
export declare namespace mpcPiroControllerUpdate {
    var PATH: string;
}
