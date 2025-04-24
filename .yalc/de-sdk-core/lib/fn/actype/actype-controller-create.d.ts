import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsActypeDto } from '../../models/amims-actype-dto';
export interface ActypeControllerCreate$Params {
    body: AmimsActypeDto;
}
export declare function actypeControllerCreate(http: HttpClient, rootUrl: string, params: ActypeControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsActypeDto;
}>>;
export declare namespace actypeControllerCreate {
    var PATH: string;
}
