import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogSpDto } from '../../models/amims-log-sp-dto';
export interface LogSpControllerUpdate$Params {
    id: string;
    body: AmimsLogSpDto;
}
export declare function logSpControllerUpdate(http: HttpClient, rootUrl: string, params: LogSpControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogSpDto;
}>>;
export declare namespace logSpControllerUpdate {
    var PATH: string;
}
