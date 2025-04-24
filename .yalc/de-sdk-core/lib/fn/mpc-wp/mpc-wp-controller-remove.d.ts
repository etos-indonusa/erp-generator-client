import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcWpDto } from '../../models/amims-mpc-wp-dto';
export interface MpcWpControllerRemove$Params {
    id: string;
}
export declare function mpcWpControllerRemove(http: HttpClient, rootUrl: string, params: MpcWpControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcWpDto;
}>>;
export declare namespace mpcWpControllerRemove {
    var PATH: string;
}
