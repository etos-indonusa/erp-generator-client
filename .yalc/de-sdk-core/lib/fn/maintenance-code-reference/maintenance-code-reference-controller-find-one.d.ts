import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeReferenceDto } from '../../models/amims-maintenance-code-reference-dto';
export interface MaintenanceCodeReferenceControllerFindOne$Params {
    id: string;
}
export declare function maintenanceCodeReferenceControllerFindOne(http: HttpClient, rootUrl: string, params: MaintenanceCodeReferenceControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceCodeReferenceDto;
}>>;
export declare namespace maintenanceCodeReferenceControllerFindOne {
    var PATH: string;
}
