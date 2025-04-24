import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogUserDto } from '../../models/amims-log-user-dto';
export interface LogUserControllerRemove$Params {
    id: string;
}
export declare function logUserControllerRemove(http: HttpClient, rootUrl: string, params: LogUserControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogUserDto;
}>>;
export declare namespace logUserControllerRemove {
    var PATH: string;
}
