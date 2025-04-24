import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcWpDto } from '../../models/amims-mpc-wp-dto';
export interface MpcWpControllerUpdate$Params {
    id: string;
    body: AmimsMpcWpDto;
}
export declare function mpcWpControllerUpdate(http: HttpClient, rootUrl: string, params: MpcWpControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcWpDto;
}>>;
export declare namespace mpcWpControllerUpdate {
    var PATH: string;
}
