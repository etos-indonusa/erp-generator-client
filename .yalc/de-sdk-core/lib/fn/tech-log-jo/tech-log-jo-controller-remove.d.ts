import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogJoDto } from '../../models/amims-tech-log-jo-dto';
export interface TechLogJoControllerRemove$Params {
    id: string;
}
export declare function techLogJoControllerRemove(http: HttpClient, rootUrl: string, params: TechLogJoControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogJoDto;
}>>;
export declare namespace techLogJoControllerRemove {
    var PATH: string;
}
