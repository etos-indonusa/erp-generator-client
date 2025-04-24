import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcGseDto } from '../../models/amims-mpc-gse-dto';
export interface MpcGseControllerCreate$Params {
    body: AmimsMpcGseDto;
}
export declare function mpcGseControllerCreate(http: HttpClient, rootUrl: string, params: MpcGseControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcGseDto;
}>>;
export declare namespace mpcGseControllerCreate {
    var PATH: string;
}
