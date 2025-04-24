import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartidDto } from '../../models/amims-partid-dto';
export interface PartidControllerRemove$Params {
    id: string;
}
export declare function partidControllerRemove(http: HttpClient, rootUrl: string, params: PartidControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartidDto;
}>>;
export declare namespace partidControllerRemove {
    var PATH: string;
}
