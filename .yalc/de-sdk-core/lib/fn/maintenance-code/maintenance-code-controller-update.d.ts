import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeDto } from '../../models/amims-maintenance-code-dto';
export interface MaintenanceCodeControllerUpdate$Params {
    id: string;
    body: AmimsMaintenanceCodeDto;
}
export declare function maintenanceCodeControllerUpdate(http: HttpClient, rootUrl: string, params: MaintenanceCodeControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceCodeDto;
}>>;
export declare namespace maintenanceCodeControllerUpdate {
    var PATH: string;
}
