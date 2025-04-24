import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceReportDto } from '../../models/amims-maintenance-report-dto';
export interface MaintenanceReportControllerFindOne$Params {
    id: string;
}
export declare function maintenanceReportControllerFindOne(http: HttpClient, rootUrl: string, params: MaintenanceReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMaintenanceReportDto;
}>>;
export declare namespace maintenanceReportControllerFindOne {
    var PATH: string;
}
