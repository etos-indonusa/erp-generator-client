import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartidDto } from '../../models/amims-partid-dto';
export interface PartidControllerFindOne$Params {
    id: string;
}
export declare function partidControllerFindOne(http: HttpClient, rootUrl: string, params: PartidControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartidDto;
}>>;
export declare namespace partidControllerFindOne {
    var PATH: string;
}
