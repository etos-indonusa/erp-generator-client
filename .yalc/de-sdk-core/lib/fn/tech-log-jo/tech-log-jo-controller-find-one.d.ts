import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogJoDto } from '../../models/amims-tech-log-jo-dto';
export interface TechLogJoControllerFindOne$Params {
    id: string;
}
export declare function techLogJoControllerFindOne(http: HttpClient, rootUrl: string, params: TechLogJoControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogJoDto;
}>>;
export declare namespace techLogJoControllerFindOne {
    var PATH: string;
}
