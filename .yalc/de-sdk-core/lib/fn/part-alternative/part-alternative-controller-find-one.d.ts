import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAlternativeDto } from '../../models/amims-part-alternative-dto';
export interface PartAlternativeControllerFindOne$Params {
    id: string;
}
export declare function partAlternativeControllerFindOne(http: HttpClient, rootUrl: string, params: PartAlternativeControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartAlternativeDto;
}>>;
export declare namespace partAlternativeControllerFindOne {
    var PATH: string;
}
