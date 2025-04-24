import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiIdentifyDto } from '../../models/amims-engineer-rti-identify-dto';
export interface EngineerRtiIdentifyControllerFindOne$Params {
    id: string;
}
export declare function engineerRtiIdentifyControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerRtiIdentifyControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiIdentifyDto;
}>>;
export declare namespace engineerRtiIdentifyControllerFindOne {
    var PATH: string;
}
