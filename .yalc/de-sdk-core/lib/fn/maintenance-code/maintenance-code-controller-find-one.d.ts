import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeDto } from '../../models/amims-maintenance-code-dto';
export interface MaintenanceCodeControllerFindOne$Params {
    id: string;
}
export declare function maintenanceCodeControllerFindOne(http: HttpClient, rootUrl: string, params: MaintenanceCodeControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceCodeDto;
}>>;
export declare namespace maintenanceCodeControllerFindOne {
    var PATH: string;
}
