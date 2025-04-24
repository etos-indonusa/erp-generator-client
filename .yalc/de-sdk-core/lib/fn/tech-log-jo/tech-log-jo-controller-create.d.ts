import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogJoDto } from '../../models/amims-tech-log-jo-dto';
export interface TechLogJoControllerCreate$Params {
    body: AmimsTechLogJoDto;
}
export declare function techLogJoControllerCreate(http: HttpClient, rootUrl: string, params: TechLogJoControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogJoDto;
}>>;
export declare namespace techLogJoControllerCreate {
    var PATH: string;
}
