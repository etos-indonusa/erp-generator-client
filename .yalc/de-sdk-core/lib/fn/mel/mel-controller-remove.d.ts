import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMelDto } from '../../models/amims-mel-dto';
export interface MelControllerRemove$Params {
    id: string;
}
export declare function melControllerRemove(http: HttpClient, rootUrl: string, params: MelControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMelDto;
}>>;
export declare namespace melControllerRemove {
    var PATH: string;
}
