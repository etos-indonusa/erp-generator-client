import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMelDto } from '../../models/amims-mel-dto';
export interface MelControllerCreate$Params {
    body: AmimsMelDto;
}
export declare function melControllerCreate(http: HttpClient, rootUrl: string, params: MelControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMelDto;
}>>;
export declare namespace melControllerCreate {
    var PATH: string;
}
