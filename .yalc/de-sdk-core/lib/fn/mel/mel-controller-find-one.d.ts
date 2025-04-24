import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMelDto } from '../../models/amims-mel-dto';
export interface MelControllerFindOne$Params {
    id: string;
}
export declare function melControllerFindOne(http: HttpClient, rootUrl: string, params: MelControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMelDto;
}>>;
export declare namespace melControllerFindOne {
    var PATH: string;
}
