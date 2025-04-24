import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAircraftReportDto } from '../../models/amims-aircraft-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface AircraftReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function aircraftReportControllerFindAll(http: HttpClient, rootUrl: string, params: AircraftReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsAircraftReportDto>;
    'total'?: number;
}>>;
export declare namespace aircraftReportControllerFindAll {
    var PATH: string;
}
