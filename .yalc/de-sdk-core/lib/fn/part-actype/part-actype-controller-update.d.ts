import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartActypeDto } from '../../models/amims-part-actype-dto';
export interface PartActypeControllerUpdate$Params {
    id: string;
    body: AmimsPartActypeDto;
}
export declare function partActypeControllerUpdate(http: HttpClient, rootUrl: string, params: PartActypeControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartActypeDto;
}>>;
export declare namespace partActypeControllerUpdate {
    var PATH: string;
}
