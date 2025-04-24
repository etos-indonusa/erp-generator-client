import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpartDto } from '../../models/amims-mpart-dto';
export interface MpartControllerFindOne$Params {
    id: string;
}
export declare function mpartControllerFindOne(http: HttpClient, rootUrl: string, params: MpartControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpartDto;
}>>;
export declare namespace mpartControllerFindOne {
    var PATH: string;
}
