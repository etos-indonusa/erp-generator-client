import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogProcessDto } from '../../models/amims-log-process-dto';
export interface LogProcessControllerUpdate$Params {
    id: string;
    body: AmimsLogProcessDto;
}
export declare function logProcessControllerUpdate(http: HttpClient, rootUrl: string, params: LogProcessControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogProcessDto;
}>>;
export declare namespace logProcessControllerUpdate {
    var PATH: string;
}
