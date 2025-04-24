import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartDto } from '../../models/amims-part-dto';
export interface PartControllerRemove$Params {
    id: string;
}
export declare function partControllerRemove(http: HttpClient, rootUrl: string, params: PartControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartDto;
}>>;
export declare namespace partControllerRemove {
    var PATH: string;
}
