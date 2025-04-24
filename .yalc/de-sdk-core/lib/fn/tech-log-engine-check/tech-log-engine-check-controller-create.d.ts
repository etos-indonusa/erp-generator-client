import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineCheckDto } from '../../models/amims-tech-log-engine-check-dto';
export interface TechLogEngineCheckControllerCreate$Params {
    body: AmimsTechLogEngineCheckDto;
}
export declare function techLogEngineCheckControllerCreate(http: HttpClient, rootUrl: string, params: TechLogEngineCheckControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogEngineCheckDto;
}>>;
export declare namespace techLogEngineCheckControllerCreate {
    var PATH: string;
}
