import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcGseDto } from '../../models/amims-mpc-gse-dto';
export interface MpcGseControllerRemove$Params {
    id: string;
}
export declare function mpcGseControllerRemove(http: HttpClient, rootUrl: string, params: MpcGseControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcGseDto;
}>>;
export declare namespace mpcGseControllerRemove {
    var PATH: string;
}
