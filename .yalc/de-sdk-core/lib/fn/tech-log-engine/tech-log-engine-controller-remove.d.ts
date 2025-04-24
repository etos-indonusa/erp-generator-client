import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineDto } from '../../models/amims-tech-log-engine-dto';
export interface TechLogEngineControllerRemove$Params {
    id: string;
}
export declare function techLogEngineControllerRemove(http: HttpClient, rootUrl: string, params: TechLogEngineControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogEngineDto;
}>>;
export declare namespace techLogEngineControllerRemove {
    var PATH: string;
}
