import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartLogDto } from '../../models/amims-part-log-dto';
export interface PartLogControllerFindOne$Params {
    id: string;
}
export declare function partLogControllerFindOne(http: HttpClient, rootUrl: string, params: PartLogControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartLogDto;
}>>;
export declare namespace partLogControllerFindOne {
    var PATH: string;
}
