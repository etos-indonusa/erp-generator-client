import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpartDto } from '../../models/amims-mpart-dto';
export interface MpartControllerUpdate$Params {
    id: string;
    body: AmimsMpartDto;
}
export declare function mpartControllerUpdate(http: HttpClient, rootUrl: string, params: MpartControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpartDto;
}>>;
export declare namespace mpartControllerUpdate {
    var PATH: string;
}
