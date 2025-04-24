import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartLogDto } from '../../models/amims-part-log-dto';
export interface PartLogControllerCreate$Params {
    body: AmimsPartLogDto;
}
export declare function partLogControllerCreate(http: HttpClient, rootUrl: string, params: PartLogControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartLogDto;
}>>;
export declare namespace partLogControllerCreate {
    var PATH: string;
}
