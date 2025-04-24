import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineDto } from '../../models/amims-tech-log-engine-dto';
export interface TechLogEngineControllerFindOne$Params {
    id: string;
}
export declare function techLogEngineControllerFindOne(http: HttpClient, rootUrl: string, params: TechLogEngineControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogEngineDto;
}>>;
export declare namespace techLogEngineControllerFindOne {
    var PATH: string;
}
