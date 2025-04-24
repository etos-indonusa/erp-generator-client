import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceDto } from '../../models/amims-maintenance-dto';
export interface MaintenanceControllerRemove$Params {
    id: string;
}
export declare function maintenanceControllerRemove(http: HttpClient, rootUrl: string, params: MaintenanceControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceDto;
}>>;
export declare namespace maintenanceControllerRemove {
    var PATH: string;
}
