import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartidDto } from '../../models/amims-partid-dto';
export interface PartidControllerUpdate$Params {
    id: string;
    body: AmimsPartidDto;
}
export declare function partidControllerUpdate(http: HttpClient, rootUrl: string, params: PartidControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartidDto;
}>>;
export declare namespace partidControllerUpdate {
    var PATH: string;
}
