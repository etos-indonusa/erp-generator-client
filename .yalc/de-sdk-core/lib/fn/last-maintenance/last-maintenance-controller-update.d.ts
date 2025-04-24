import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLastMaintenanceDto } from '../../models/amims-last-maintenance-dto';
export interface LastMaintenanceControllerUpdate$Params {
    id: string;
    body: AmimsLastMaintenanceDto;
}
export declare function lastMaintenanceControllerUpdate(http: HttpClient, rootUrl: string, params: LastMaintenanceControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLastMaintenanceDto;
}>>;
export declare namespace lastMaintenanceControllerUpdate {
    var PATH: string;
}
