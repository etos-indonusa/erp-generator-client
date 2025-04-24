import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPilotDto } from '../../models/amims-pilot-dto';
export interface PilotControllerCreate$Params {
    body: AmimsPilotDto;
}
export declare function pilotControllerCreate(http: HttpClient, rootUrl: string, params: PilotControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPilotDto;
}>>;
export declare namespace pilotControllerCreate {
    var PATH: string;
}
