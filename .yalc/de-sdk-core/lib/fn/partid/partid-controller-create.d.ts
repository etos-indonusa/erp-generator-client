import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartidDto } from '../../models/amims-partid-dto';
export interface PartidControllerCreate$Params {
    body: AmimsPartidDto;
}
export declare function partidControllerCreate(http: HttpClient, rootUrl: string, params: PartidControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartidDto;
}>>;
export declare namespace partidControllerCreate {
    var PATH: string;
}
