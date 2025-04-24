import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLastMaintenanceReportDto } from '../../models/amims-last-maintenance-report-dto';
export interface LastMaintenanceReportControllerFindOne$Params {
    id: string;
}
export declare function lastMaintenanceReportControllerFindOne(http: HttpClient, rootUrl: string, params: LastMaintenanceReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLastMaintenanceReportDto;
}>>;
export declare namespace lastMaintenanceReportControllerFindOne {
    var PATH: string;
}
