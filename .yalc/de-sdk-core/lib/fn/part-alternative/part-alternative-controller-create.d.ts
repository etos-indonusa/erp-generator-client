import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAlternativeDto } from '../../models/amims-part-alternative-dto';
export interface PartAlternativeControllerCreate$Params {
    body: AmimsPartAlternativeDto;
}
export declare function partAlternativeControllerCreate(http: HttpClient, rootUrl: string, params: PartAlternativeControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartAlternativeDto;
}>>;
export declare namespace partAlternativeControllerCreate {
    var PATH: string;
}
