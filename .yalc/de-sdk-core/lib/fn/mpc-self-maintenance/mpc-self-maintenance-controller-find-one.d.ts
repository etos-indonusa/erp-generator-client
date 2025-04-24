import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcSelfMaintenanceDto } from '../../models/amims-mpc-self-maintenance-dto';
export interface MpcSelfMaintenanceControllerFindOne$Params {
    id: string;
}
export declare function mpcSelfMaintenanceControllerFindOne(http: HttpClient, rootUrl: string, params: MpcSelfMaintenanceControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcSelfMaintenanceDto;
}>>;
export declare namespace mpcSelfMaintenanceControllerFindOne {
    var PATH: string;
}
