import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcGseDto } from '../../models/amims-mpc-gse-dto';
export interface MpcGseControllerFindOne$Params {
    id: string;
}
export declare function mpcGseControllerFindOne(http: HttpClient, rootUrl: string, params: MpcGseControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcGseDto;
}>>;
export declare namespace mpcGseControllerFindOne {
    var PATH: string;
}
