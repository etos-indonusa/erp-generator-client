import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeReferenceDto } from '../../models/amims-maintenance-code-reference-dto';
export interface MaintenanceCodeReferenceControllerRemove$Params {
    id: string;
}
export declare function maintenanceCodeReferenceControllerRemove(http: HttpClient, rootUrl: string, params: MaintenanceCodeReferenceControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceCodeReferenceDto;
}>>;
export declare namespace maintenanceCodeReferenceControllerRemove {
    var PATH: string;
}
