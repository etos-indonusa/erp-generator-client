import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiDto } from '../../models/amims-engineer-rti-dto';
export interface EngineerRtiControllerCreate$Params {
    body: AmimsEngineerRtiDto;
}
export declare function engineerRtiControllerCreate(http: HttpClient, rootUrl: string, params: EngineerRtiControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiDto;
}>>;
export declare namespace engineerRtiControllerCreate {
    var PATH: string;
}
