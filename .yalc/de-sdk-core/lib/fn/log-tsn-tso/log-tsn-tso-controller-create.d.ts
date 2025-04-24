import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogTsnTsoDto } from '../../models/amims-log-tsn-tso-dto';
export interface LogTsnTsoControllerCreate$Params {
    body: AmimsLogTsnTsoDto;
}
export declare function logTsnTsoControllerCreate(http: HttpClient, rootUrl: string, params: LogTsnTsoControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogTsnTsoDto;
}>>;
export declare namespace logTsnTsoControllerCreate {
    var PATH: string;
}
