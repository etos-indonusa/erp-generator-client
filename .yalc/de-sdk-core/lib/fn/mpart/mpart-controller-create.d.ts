import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpartDto } from '../../models/amims-mpart-dto';
export interface MpartControllerCreate$Params {
    body: AmimsMpartDto;
}
export declare function mpartControllerCreate(http: HttpClient, rootUrl: string, params: MpartControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpartDto;
}>>;
export declare namespace mpartControllerCreate {
    var PATH: string;
}
