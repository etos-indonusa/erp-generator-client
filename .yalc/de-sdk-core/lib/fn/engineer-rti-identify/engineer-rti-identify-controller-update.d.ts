import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiIdentifyDto } from '../../models/amims-engineer-rti-identify-dto';
export interface EngineerRtiIdentifyControllerUpdate$Params {
    id: string;
    body: AmimsEngineerRtiIdentifyDto;
}
export declare function engineerRtiIdentifyControllerUpdate(http: HttpClient, rootUrl: string, params: EngineerRtiIdentifyControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiIdentifyDto;
}>>;
export declare namespace engineerRtiIdentifyControllerUpdate {
    var PATH: string;
}
