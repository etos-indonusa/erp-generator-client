import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcSelfMaintenanceDto } from '../../models/amims-mpc-self-maintenance-dto';
export interface MpcSelfMaintenanceControllerRemove$Params {
    id: string;
}
export declare function mpcSelfMaintenanceControllerRemove(http: HttpClient, rootUrl: string, params: MpcSelfMaintenanceControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcSelfMaintenanceDto;
}>>;
export declare namespace mpcSelfMaintenanceControllerRemove {
    var PATH: string;
}
