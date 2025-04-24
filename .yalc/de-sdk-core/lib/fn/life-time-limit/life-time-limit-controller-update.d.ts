import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLifeTimeLimitDto } from '../../models/amims-life-time-limit-dto';
export interface LifeTimeLimitControllerUpdate$Params {
    id: string;
    body: AmimsLifeTimeLimitDto;
}
export declare function lifeTimeLimitControllerUpdate(http: HttpClient, rootUrl: string, params: LifeTimeLimitControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLifeTimeLimitDto;
}>>;
export declare namespace lifeTimeLimitControllerUpdate {
    var PATH: string;
}
