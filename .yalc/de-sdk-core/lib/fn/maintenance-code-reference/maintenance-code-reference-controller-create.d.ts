import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeReferenceDto } from '../../models/amims-maintenance-code-reference-dto';
export interface MaintenanceCodeReferenceControllerCreate$Params {
    body: AmimsMaintenanceCodeReferenceDto;
}
export declare function maintenanceCodeReferenceControllerCreate(http: HttpClient, rootUrl: string, params: MaintenanceCodeReferenceControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceCodeReferenceDto;
}>>;
export declare namespace maintenanceCodeReferenceControllerCreate {
    var PATH: string;
}
