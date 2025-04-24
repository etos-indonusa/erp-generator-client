import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsActypeDto } from '../../models/amims-actype-dto';
export interface ActypeControllerUpdate$Params {
    id: string;
    body: AmimsActypeDto;
}
export declare function actypeControllerUpdate(http: HttpClient, rootUrl: string, params: ActypeControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsActypeDto;
}>>;
export declare namespace actypeControllerUpdate {
    var PATH: string;
}
