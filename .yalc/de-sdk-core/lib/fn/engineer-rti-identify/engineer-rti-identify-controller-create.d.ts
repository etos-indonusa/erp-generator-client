import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiIdentifyDto } from '../../models/amims-engineer-rti-identify-dto';
export interface EngineerRtiIdentifyControllerCreate$Params {
    body: AmimsEngineerRtiIdentifyDto;
}
export declare function engineerRtiIdentifyControllerCreate(http: HttpClient, rootUrl: string, params: EngineerRtiIdentifyControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiIdentifyDto;
}>>;
export declare namespace engineerRtiIdentifyControllerCreate {
    var PATH: string;
}
