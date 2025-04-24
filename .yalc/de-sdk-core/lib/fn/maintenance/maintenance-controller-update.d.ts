import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceDto } from '../../models/amims-maintenance-dto';
export interface MaintenanceControllerUpdate$Params {
    id: string;
    body: AmimsMaintenanceDto;
}
export declare function maintenanceControllerUpdate(http: HttpClient, rootUrl: string, params: MaintenanceControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceDto;
}>>;
export declare namespace maintenanceControllerUpdate {
    var PATH: string;
}
