import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeReferenceDto } from '../../models/amims-maintenance-code-reference-dto';
export interface MaintenanceCodeReferenceControllerUpdate$Params {
    id: string;
    body: AmimsMaintenanceCodeReferenceDto;
}
export declare function maintenanceCodeReferenceControllerUpdate(http: HttpClient, rootUrl: string, params: MaintenanceCodeReferenceControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceCodeReferenceDto;
}>>;
export declare namespace maintenanceCodeReferenceControllerUpdate {
    var PATH: string;
}
