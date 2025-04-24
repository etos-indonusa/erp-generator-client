import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogSpDto } from '../../models/amims-log-sp-dto';
export interface LogSpControllerFindOne$Params {
    id: string;
}
export declare function logSpControllerFindOne(http: HttpClient, rootUrl: string, params: LogSpControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogSpDto;
}>>;
export declare namespace logSpControllerFindOne {
    var PATH: string;
}
