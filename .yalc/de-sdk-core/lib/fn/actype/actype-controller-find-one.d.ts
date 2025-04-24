import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsActypeDto } from '../../models/amims-actype-dto';
export interface ActypeControllerFindOne$Params {
    id: string;
}
export declare function actypeControllerFindOne(http: HttpClient, rootUrl: string, params: ActypeControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsActypeDto;
}>>;
export declare namespace actypeControllerFindOne {
    var PATH: string;
}
