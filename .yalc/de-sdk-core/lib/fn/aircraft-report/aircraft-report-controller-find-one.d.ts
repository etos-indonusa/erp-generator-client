import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAircraftReportDto } from '../../models/amims-aircraft-report-dto';
export interface AircraftReportControllerFindOne$Params {
    id: string;
}
export declare function aircraftReportControllerFindOne(http: HttpClient, rootUrl: string, params: AircraftReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAircraftReportDto;
}>>;
export declare namespace aircraftReportControllerFindOne {
    var PATH: string;
}
