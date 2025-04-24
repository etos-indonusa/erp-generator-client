import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogProcessDto } from '../../models/amims-log-process-dto';
export interface LogProcessControllerRemove$Params {
    id: string;
}
export declare function logProcessControllerRemove(http: HttpClient, rootUrl: string, params: LogProcessControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogProcessDto;
}>>;
export declare namespace logProcessControllerRemove {
    var PATH: string;
}
