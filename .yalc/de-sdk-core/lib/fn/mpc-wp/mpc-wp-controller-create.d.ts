import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcWpDto } from '../../models/amims-mpc-wp-dto';
export interface MpcWpControllerCreate$Params {
    body: AmimsMpcWpDto;
}
export declare function mpcWpControllerCreate(http: HttpClient, rootUrl: string, params: MpcWpControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcWpDto;
}>>;
export declare namespace mpcWpControllerCreate {
    var PATH: string;
}
