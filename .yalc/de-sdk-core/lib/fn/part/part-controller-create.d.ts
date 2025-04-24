import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartDto } from '../../models/amims-part-dto';
export interface PartControllerCreate$Params {
    body: AmimsPartDto;
}
export declare function partControllerCreate(http: HttpClient, rootUrl: string, params: PartControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartDto;
}>>;
export declare namespace partControllerCreate {
    var PATH: string;
}
