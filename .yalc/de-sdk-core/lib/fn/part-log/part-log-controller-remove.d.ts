import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartLogDto } from '../../models/amims-part-log-dto';
export interface PartLogControllerRemove$Params {
    id: string;
}
export declare function partLogControllerRemove(http: HttpClient, rootUrl: string, params: PartLogControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartLogDto;
}>>;
export declare namespace partLogControllerRemove {
    var PATH: string;
}
