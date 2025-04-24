import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcSelfMaintenanceDto } from '../../models/amims-mpc-self-maintenance-dto';
export interface MpcSelfMaintenanceControllerCreate$Params {
    body: AmimsMpcSelfMaintenanceDto;
}
export declare function mpcSelfMaintenanceControllerCreate(http: HttpClient, rootUrl: string, params: MpcSelfMaintenanceControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcSelfMaintenanceDto;
}>>;
export declare namespace mpcSelfMaintenanceControllerCreate {
    var PATH: string;
}
