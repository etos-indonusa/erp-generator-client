import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineCheckDto } from '../../models/amims-tech-log-engine-check-dto';
export interface TechLogEngineCheckControllerFindOne$Params {
    id: string;
}
export declare function techLogEngineCheckControllerFindOne(http: HttpClient, rootUrl: string, params: TechLogEngineCheckControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogEngineCheckDto;
}>>;
export declare namespace techLogEngineCheckControllerFindOne {
    var PATH: string;
}
