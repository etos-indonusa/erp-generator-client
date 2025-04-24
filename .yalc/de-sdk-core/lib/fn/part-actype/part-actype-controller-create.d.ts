import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartActypeDto } from '../../models/amims-part-actype-dto';
export interface PartActypeControllerCreate$Params {
    body: AmimsPartActypeDto;
}
export declare function partActypeControllerCreate(http: HttpClient, rootUrl: string, params: PartActypeControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartActypeDto;
}>>;
export declare namespace partActypeControllerCreate {
    var PATH: string;
}
