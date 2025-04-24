import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAlternativeDto } from '../../models/amims-part-alternative-dto';
export interface PartAlternativeControllerUpdate$Params {
    id: string;
    body: AmimsPartAlternativeDto;
}
export declare function partAlternativeControllerUpdate(http: HttpClient, rootUrl: string, params: PartAlternativeControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartAlternativeDto;
}>>;
export declare namespace partAlternativeControllerUpdate {
    var PATH: string;
}
