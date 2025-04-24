import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPilotDto } from '../../models/amims-pilot-dto';
export interface PilotControllerRemove$Params {
    id: string;
}
export declare function pilotControllerRemove(http: HttpClient, rootUrl: string, params: PilotControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPilotDto;
}>>;
export declare namespace pilotControllerRemove {
    var PATH: string;
}
