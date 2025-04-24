import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAircraftDetailReportDto } from '../../models/amims-aircraft-detail-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface AircraftDetailReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function aircraftDetailReportControllerFindAll(http: HttpClient, rootUrl: string, params: AircraftDetailReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsAircraftDetailReportDto>;
    'total'?: number;
}>>;
export declare namespace aircraftDetailReportControllerFindAll {
    var PATH: string;
}
