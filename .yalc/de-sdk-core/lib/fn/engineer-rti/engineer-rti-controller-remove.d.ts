import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiDto } from '../../models/amims-engineer-rti-dto';
export interface EngineerRtiControllerRemove$Params {
    id: string;
}
export declare function engineerRtiControllerRemove(http: HttpClient, rootUrl: string, params: EngineerRtiControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiDto;
}>>;
export declare namespace engineerRtiControllerRemove {
    var PATH: string;
}
