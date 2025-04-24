import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogProcessDto } from '../../models/amims-log-process-dto';
export interface LogProcessControllerCreate$Params {
    body: AmimsLogProcessDto;
}
export declare function logProcessControllerCreate(http: HttpClient, rootUrl: string, params: LogProcessControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogProcessDto;
}>>;
export declare namespace logProcessControllerCreate {
    var PATH: string;
}
