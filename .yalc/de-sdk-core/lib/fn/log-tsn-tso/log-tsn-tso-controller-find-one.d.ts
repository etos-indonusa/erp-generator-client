import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogTsnTsoDto } from '../../models/amims-log-tsn-tso-dto';
export interface LogTsnTsoControllerFindOne$Params {
    id: string;
}
export declare function logTsnTsoControllerFindOne(http: HttpClient, rootUrl: string, params: LogTsnTsoControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogTsnTsoDto;
}>>;
export declare namespace logTsnTsoControllerFindOne {
    var PATH: string;
}
