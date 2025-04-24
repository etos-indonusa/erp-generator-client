import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceDto } from '../../models/amims-maintenance-dto';
export interface MaintenanceControllerFindOne$Params {
    id: string;
}
export declare function maintenanceControllerFindOne(http: HttpClient, rootUrl: string, params: MaintenanceControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceDto;
}>>;
export declare namespace maintenanceControllerFindOne {
    var PATH: string;
}
