import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeFormIssuedDto } from '../../models/amims-maintenance-code-form-issued-dto';
export interface MaintenanceCodeFormIssuedControllerUpdate$Params {
    id: string;
    body: AmimsMaintenanceCodeFormIssuedDto;
}
export declare function maintenanceCodeFormIssuedControllerUpdate(http: HttpClient, rootUrl: string, params: MaintenanceCodeFormIssuedControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceCodeFormIssuedDto;
}>>;
export declare namespace maintenanceCodeFormIssuedControllerUpdate {
    var PATH: string;
}
