import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogJoDto } from '../../models/amims-tech-log-jo-dto';
export interface TechLogJoControllerUpdate$Params {
    id: string;
    body: AmimsTechLogJoDto;
}
export declare function techLogJoControllerUpdate(http: HttpClient, rootUrl: string, params: TechLogJoControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogJoDto;
}>>;
export declare namespace techLogJoControllerUpdate {
    var PATH: string;
}
