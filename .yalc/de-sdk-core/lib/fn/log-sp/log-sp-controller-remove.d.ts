import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogSpDto } from '../../models/amims-log-sp-dto';
export interface LogSpControllerRemove$Params {
    id: string;
}
export declare function logSpControllerRemove(http: HttpClient, rootUrl: string, params: LogSpControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogSpDto;
}>>;
export declare namespace logSpControllerRemove {
    var PATH: string;
}
