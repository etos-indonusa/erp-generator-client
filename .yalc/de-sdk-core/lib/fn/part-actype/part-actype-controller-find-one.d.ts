import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartActypeDto } from '../../models/amims-part-actype-dto';
export interface PartActypeControllerFindOne$Params {
    id: string;
}
export declare function partActypeControllerFindOne(http: HttpClient, rootUrl: string, params: PartActypeControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartActypeDto;
}>>;
export declare namespace partActypeControllerFindOne {
    var PATH: string;
}
