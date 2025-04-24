import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcWpDto } from '../../models/amims-mpc-wp-dto';
export interface MpcWpControllerFindOne$Params {
    id: string;
}
export declare function mpcWpControllerFindOne(http: HttpClient, rootUrl: string, params: MpcWpControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcWpDto;
}>>;
export declare namespace mpcWpControllerFindOne {
    var PATH: string;
}
