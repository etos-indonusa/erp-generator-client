import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLifeTimeLimitDto } from '../../models/amims-life-time-limit-dto';
export interface LifeTimeLimitControllerRemove$Params {
    id: string;
}
export declare function lifeTimeLimitControllerRemove(http: HttpClient, rootUrl: string, params: LifeTimeLimitControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLifeTimeLimitDto;
}>>;
export declare namespace lifeTimeLimitControllerRemove {
    var PATH: string;
}
