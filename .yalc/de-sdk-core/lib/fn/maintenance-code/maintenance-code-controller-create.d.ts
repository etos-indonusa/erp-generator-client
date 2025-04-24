import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeDto } from '../../models/amims-maintenance-code-dto';
export interface MaintenanceCodeControllerCreate$Params {
    body: AmimsMaintenanceCodeDto;
}
export declare function maintenanceCodeControllerCreate(http: HttpClient, rootUrl: string, params: MaintenanceCodeControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceCodeDto;
}>>;
export declare namespace maintenanceCodeControllerCreate {
    var PATH: string;
}
