import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiDto } from '../../models/amims-engineer-rti-dto';
export interface EngineerRtiControllerFindOne$Params {
    id: string;
}
export declare function engineerRtiControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerRtiControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiDto;
}>>;
export declare namespace engineerRtiControllerFindOne {
    var PATH: string;
}
