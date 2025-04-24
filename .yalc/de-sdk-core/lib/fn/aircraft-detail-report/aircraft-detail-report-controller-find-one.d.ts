import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAircraftDetailReportDto } from '../../models/amims-aircraft-detail-report-dto';
export interface AircraftDetailReportControllerFindOne$Params {
    id: string;
}
export declare function aircraftDetailReportControllerFindOne(http: HttpClient, rootUrl: string, params: AircraftDetailReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAircraftDetailReportDto;
}>>;
export declare namespace aircraftDetailReportControllerFindOne {
    var PATH: string;
}
