import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineCheckDto } from '../../models/amims-tech-log-engine-check-dto';
export interface TechLogEngineCheckControllerRemove$Params {
    id: string;
}
export declare function techLogEngineCheckControllerRemove(http: HttpClient, rootUrl: string, params: TechLogEngineCheckControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTechLogEngineCheckDto;
}>>;
export declare namespace techLogEngineCheckControllerRemove {
    var PATH: string;
}
