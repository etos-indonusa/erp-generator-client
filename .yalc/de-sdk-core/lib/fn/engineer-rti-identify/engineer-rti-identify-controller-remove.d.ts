import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiIdentifyDto } from '../../models/amims-engineer-rti-identify-dto';
export interface EngineerRtiIdentifyControllerRemove$Params {
    id: string;
}
export declare function engineerRtiIdentifyControllerRemove(http: HttpClient, rootUrl: string, params: EngineerRtiIdentifyControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiIdentifyDto;
}>>;
export declare namespace engineerRtiIdentifyControllerRemove {
    var PATH: string;
}
