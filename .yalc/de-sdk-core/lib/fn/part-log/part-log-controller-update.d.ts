import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartLogDto } from '../../models/amims-part-log-dto';
export interface PartLogControllerUpdate$Params {
    id: string;
    body: AmimsPartLogDto;
}
export declare function partLogControllerUpdate(http: HttpClient, rootUrl: string, params: PartLogControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartLogDto;
}>>;
export declare namespace partLogControllerUpdate {
    var PATH: string;
}
