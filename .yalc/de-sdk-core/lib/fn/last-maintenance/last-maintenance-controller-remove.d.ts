import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLastMaintenanceDto } from '../../models/amims-last-maintenance-dto';
export interface LastMaintenanceControllerRemove$Params {
    id: string;
}
export declare function lastMaintenanceControllerRemove(http: HttpClient, rootUrl: string, params: LastMaintenanceControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLastMaintenanceDto;
}>>;
export declare namespace lastMaintenanceControllerRemove {
    var PATH: string;
}
