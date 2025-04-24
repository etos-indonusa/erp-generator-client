import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcPiroDto } from '../../models/amims-mpc-piro-dto';
export interface MpcPiroControllerFindOne$Params {
    id: string;
}
export declare function mpcPiroControllerFindOne(http: HttpClient, rootUrl: string, params: MpcPiroControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcPiroDto;
}>>;
export declare namespace mpcPiroControllerFindOne {
    var PATH: string;
}
