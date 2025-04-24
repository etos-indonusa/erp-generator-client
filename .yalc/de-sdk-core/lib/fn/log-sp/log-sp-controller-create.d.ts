import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogSpDto } from '../../models/amims-log-sp-dto';
export interface LogSpControllerCreate$Params {
    body: AmimsLogSpDto;
}
export declare function logSpControllerCreate(http: HttpClient, rootUrl: string, params: LogSpControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogSpDto;
}>>;
export declare namespace logSpControllerCreate {
    var PATH: string;
}
