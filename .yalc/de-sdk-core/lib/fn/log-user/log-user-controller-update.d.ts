import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogUserDto } from '../../models/amims-log-user-dto';
export interface LogUserControllerUpdate$Params {
    id: string;
    body: AmimsLogUserDto;
}
export declare function logUserControllerUpdate(http: HttpClient, rootUrl: string, params: LogUserControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogUserDto;
}>>;
export declare namespace logUserControllerUpdate {
    var PATH: string;
}
