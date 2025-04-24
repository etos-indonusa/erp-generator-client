import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartDto } from '../../models/amims-part-dto';
export interface PartControllerUpdate$Params {
    id: string;
    body: AmimsPartDto;
}
export declare function partControllerUpdate(http: HttpClient, rootUrl: string, params: PartControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartDto;
}>>;
export declare namespace partControllerUpdate {
    var PATH: string;
}
