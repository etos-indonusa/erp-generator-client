import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPilotDto } from '../../models/amims-pilot-dto';
export interface PilotControllerUpdate$Params {
    id: string;
    body: AmimsPilotDto;
}
export declare function pilotControllerUpdate(http: HttpClient, rootUrl: string, params: PilotControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPilotDto;
}>>;
export declare namespace pilotControllerUpdate {
    var PATH: string;
}
