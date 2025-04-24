import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpartDto } from '../../models/amims-mpart-dto';
export interface MpartControllerRemove$Params {
    id: string;
}
export declare function mpartControllerRemove(http: HttpClient, rootUrl: string, params: MpartControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpartDto;
}>>;
export declare namespace mpartControllerRemove {
    var PATH: string;
}
