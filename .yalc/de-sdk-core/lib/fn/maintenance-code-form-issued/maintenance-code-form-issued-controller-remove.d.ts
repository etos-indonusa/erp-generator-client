import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeFormIssuedDto } from '../../models/amims-maintenance-code-form-issued-dto';
export interface MaintenanceCodeFormIssuedControllerRemove$Params {
    id: string;
}
export declare function maintenanceCodeFormIssuedControllerRemove(http: HttpClient, rootUrl: string, params: MaintenanceCodeFormIssuedControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceCodeFormIssuedDto;
}>>;
export declare namespace maintenanceCodeFormIssuedControllerRemove {
    var PATH: string;
}
