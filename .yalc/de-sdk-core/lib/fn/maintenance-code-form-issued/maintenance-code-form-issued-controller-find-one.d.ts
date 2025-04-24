import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeFormIssuedDto } from '../../models/amims-maintenance-code-form-issued-dto';
export interface MaintenanceCodeFormIssuedControllerFindOne$Params {
    id: string;
}
export declare function maintenanceCodeFormIssuedControllerFindOne(http: HttpClient, rootUrl: string, params: MaintenanceCodeFormIssuedControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceCodeFormIssuedDto;
}>>;
export declare namespace maintenanceCodeFormIssuedControllerFindOne {
    var PATH: string;
}
