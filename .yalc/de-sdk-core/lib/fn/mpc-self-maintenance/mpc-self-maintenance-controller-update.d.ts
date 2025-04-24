import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcSelfMaintenanceDto } from '../../models/amims-mpc-self-maintenance-dto';
export interface MpcSelfMaintenanceControllerUpdate$Params {
    id: string;
    body: AmimsMpcSelfMaintenanceDto;
}
export declare function mpcSelfMaintenanceControllerUpdate(http: HttpClient, rootUrl: string, params: MpcSelfMaintenanceControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcSelfMaintenanceDto;
}>>;
export declare namespace mpcSelfMaintenanceControllerUpdate {
    var PATH: string;
}
