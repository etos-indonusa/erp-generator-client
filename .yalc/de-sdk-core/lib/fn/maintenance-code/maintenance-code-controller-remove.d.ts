import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeDto } from '../../models/amims-maintenance-code-dto';
export interface MaintenanceCodeControllerRemove$Params {
    id: string;
}
export declare function maintenanceCodeControllerRemove(http: HttpClient, rootUrl: string, params: MaintenanceCodeControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceCodeDto;
}>>;
export declare namespace maintenanceCodeControllerRemove {
    var PATH: string;
}
