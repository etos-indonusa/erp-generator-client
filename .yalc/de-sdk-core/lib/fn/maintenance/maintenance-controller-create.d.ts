import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceDto } from '../../models/amims-maintenance-dto';
export interface MaintenanceControllerCreate$Params {
    body: AmimsMaintenanceDto;
}
export declare function maintenanceControllerCreate(http: HttpClient, rootUrl: string, params: MaintenanceControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceDto;
}>>;
export declare namespace maintenanceControllerCreate {
    var PATH: string;
}
