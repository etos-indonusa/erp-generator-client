import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartDto } from '../../models/amims-part-dto';
export interface PartControllerFindOne$Params {
    id: string;
}
export declare function partControllerFindOne(http: HttpClient, rootUrl: string, params: PartControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartDto;
}>>;
export declare namespace partControllerFindOne {
    var PATH: string;
}
