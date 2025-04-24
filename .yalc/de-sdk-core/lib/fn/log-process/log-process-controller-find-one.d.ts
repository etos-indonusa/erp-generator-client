import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogProcessDto } from '../../models/amims-log-process-dto';
export interface LogProcessControllerFindOne$Params {
    id: string;
}
export declare function logProcessControllerFindOne(http: HttpClient, rootUrl: string, params: LogProcessControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogProcessDto;
}>>;
export declare namespace logProcessControllerFindOne {
    var PATH: string;
}
