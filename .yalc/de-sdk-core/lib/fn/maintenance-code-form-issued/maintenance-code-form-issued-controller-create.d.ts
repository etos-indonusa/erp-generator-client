import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeFormIssuedDto } from '../../models/amims-maintenance-code-form-issued-dto';
export interface MaintenanceCodeFormIssuedControllerCreate$Params {
    body: AmimsMaintenanceCodeFormIssuedDto;
}
export declare function maintenanceCodeFormIssuedControllerCreate(http: HttpClient, rootUrl: string, params: MaintenanceCodeFormIssuedControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceCodeFormIssuedDto;
}>>;
export declare namespace maintenanceCodeFormIssuedControllerCreate {
    var PATH: string;
}
