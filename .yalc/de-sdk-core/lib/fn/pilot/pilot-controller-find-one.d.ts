import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPilotDto } from '../../models/amims-pilot-dto';
export interface PilotControllerFindOne$Params {
    id: string;
}
export declare function pilotControllerFindOne(http: HttpClient, rootUrl: string, params: PilotControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPilotDto;
}>>;
export declare namespace pilotControllerFindOne {
    var PATH: string;
}
