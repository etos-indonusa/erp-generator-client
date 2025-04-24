import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLastMaintenanceDto } from '../../models/amims-last-maintenance-dto';
export interface LastMaintenanceControllerCreate$Params {
    body: AmimsLastMaintenanceDto;
}
export declare function lastMaintenanceControllerCreate(http: HttpClient, rootUrl: string, params: LastMaintenanceControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLastMaintenanceDto;
}>>;
export declare namespace lastMaintenanceControllerCreate {
    var PATH: string;
}
