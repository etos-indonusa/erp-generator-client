import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLastMaintenanceDto } from '../../models/amims-last-maintenance-dto';
export interface LastMaintenanceControllerFindOne$Params {
    id: string;
}
export declare function lastMaintenanceControllerFindOne(http: HttpClient, rootUrl: string, params: LastMaintenanceControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLastMaintenanceDto;
}>>;
export declare namespace lastMaintenanceControllerFindOne {
    var PATH: string;
}
