import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsActypeDto } from '../../models/amims-actype-dto';
export interface ActypeControllerRemove$Params {
    id: string;
}
export declare function actypeControllerRemove(http: HttpClient, rootUrl: string, params: ActypeControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsActypeDto;
}>>;
export declare namespace actypeControllerRemove {
    var PATH: string;
}
