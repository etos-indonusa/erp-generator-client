import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMelDto } from '../../models/amims-mel-dto';
export interface MelControllerUpdate$Params {
    id: string;
    body: AmimsMelDto;
}
export declare function melControllerUpdate(http: HttpClient, rootUrl: string, params: MelControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMelDto;
}>>;
export declare namespace melControllerUpdate {
    var PATH: string;
}
