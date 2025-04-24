import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineCheckDto } from '../../models/amims-tech-log-engine-check-dto';
export interface TechLogEngineCheckControllerUpdate$Params {
    id: string;
    body: AmimsTechLogEngineCheckDto;
}
export declare function techLogEngineCheckControllerUpdate(http: HttpClient, rootUrl: string, params: TechLogEngineCheckControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogEngineCheckDto;
}>>;
export declare namespace techLogEngineCheckControllerUpdate {
    var PATH: string;
}
