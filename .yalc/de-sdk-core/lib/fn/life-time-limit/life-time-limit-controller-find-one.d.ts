import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLifeTimeLimitDto } from '../../models/amims-life-time-limit-dto';
export interface LifeTimeLimitControllerFindOne$Params {
    id: string;
}
export declare function lifeTimeLimitControllerFindOne(http: HttpClient, rootUrl: string, params: LifeTimeLimitControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLifeTimeLimitDto;
}>>;
export declare namespace lifeTimeLimitControllerFindOne {
    var PATH: string;
}
