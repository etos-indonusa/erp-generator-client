import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcGseDto } from '../../models/amims-mpc-gse-dto';
export interface MpcGseControllerUpdate$Params {
    id: string;
    body: AmimsMpcGseDto;
}
export declare function mpcGseControllerUpdate(http: HttpClient, rootUrl: string, params: MpcGseControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcGseDto;
}>>;
export declare namespace mpcGseControllerUpdate {
    var PATH: string;
}
