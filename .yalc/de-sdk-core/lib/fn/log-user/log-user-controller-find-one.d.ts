import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogUserDto } from '../../models/amims-log-user-dto';
export interface LogUserControllerFindOne$Params {
    id: string;
}
export declare function logUserControllerFindOne(http: HttpClient, rootUrl: string, params: LogUserControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogUserDto;
}>>;
export declare namespace logUserControllerFindOne {
    var PATH: string;
}
