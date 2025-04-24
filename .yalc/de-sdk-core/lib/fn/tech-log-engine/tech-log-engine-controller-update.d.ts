import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineDto } from '../../models/amims-tech-log-engine-dto';
export interface TechLogEngineControllerUpdate$Params {
    id: string;
    body: AmimsTechLogEngineDto;
}
export declare function techLogEngineControllerUpdate(http: HttpClient, rootUrl: string, params: TechLogEngineControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogEngineDto;
}>>;
export declare namespace techLogEngineControllerUpdate {
    var PATH: string;
}
