import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartActypeDto } from '../../models/amims-part-actype-dto';
export interface PartActypeControllerRemove$Params {
    id: string;
}
export declare function partActypeControllerRemove(http: HttpClient, rootUrl: string, params: PartActypeControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartActypeDto;
}>>;
export declare namespace partActypeControllerRemove {
    var PATH: string;
}
