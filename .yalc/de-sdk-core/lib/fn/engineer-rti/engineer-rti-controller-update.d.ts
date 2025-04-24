import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiDto } from '../../models/amims-engineer-rti-dto';
export interface EngineerRtiControllerUpdate$Params {
    id: string;
    body: AmimsEngineerRtiDto;
}
export declare function engineerRtiControllerUpdate(http: HttpClient, rootUrl: string, params: EngineerRtiControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiDto;
}>>;
export declare namespace engineerRtiControllerUpdate {
    var PATH: string;
}
