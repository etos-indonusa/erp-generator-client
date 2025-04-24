import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogTsnTsoDto } from '../../models/amims-log-tsn-tso-dto';
export interface LogTsnTsoControllerUpdate$Params {
    id: string;
    body: AmimsLogTsnTsoDto;
}
export declare function logTsnTsoControllerUpdate(http: HttpClient, rootUrl: string, params: LogTsnTsoControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogTsnTsoDto;
}>>;
export declare namespace logTsnTsoControllerUpdate {
    var PATH: string;
}
