import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAlternativeDto } from '../../models/amims-part-alternative-dto';
export interface PartAlternativeControllerRemove$Params {
    id: string;
}
export declare function partAlternativeControllerRemove(http: HttpClient, rootUrl: string, params: PartAlternativeControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartAlternativeDto;
}>>;
export declare namespace partAlternativeControllerRemove {
    var PATH: string;
}
