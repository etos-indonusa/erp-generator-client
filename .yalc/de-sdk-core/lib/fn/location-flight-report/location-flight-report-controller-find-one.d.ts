import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLocationFlightReportDto } from '../../models/amims-location-flight-report-dto';
export interface LocationFlightReportControllerFindOne$Params {
    id: string;
}
export declare function locationFlightReportControllerFindOne(http: HttpClient, rootUrl: string, params: LocationFlightReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLocationFlightReportDto;
}>>;
export declare namespace locationFlightReportControllerFindOne {
    var PATH: string;
}
