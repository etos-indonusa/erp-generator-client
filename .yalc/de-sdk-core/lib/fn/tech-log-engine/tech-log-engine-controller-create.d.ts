import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineDto } from '../../models/amims-tech-log-engine-dto';
export interface TechLogEngineControllerCreate$Params {
    body: AmimsTechLogEngineDto;
}
export declare function techLogEngineControllerCreate(http: HttpClient, rootUrl: string, params: TechLogEngineControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogEngineDto;
}>>;
export declare namespace techLogEngineControllerCreate {
    var PATH: string;
}
