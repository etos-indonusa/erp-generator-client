import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogUserDto } from '../../models/amims-log-user-dto';
export interface LogUserControllerCreate$Params {
    body: AmimsLogUserDto;
}
export declare function logUserControllerCreate(http: HttpClient, rootUrl: string, params: LogUserControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogUserDto;
}>>;
export declare namespace logUserControllerCreate {
    var PATH: string;
}
