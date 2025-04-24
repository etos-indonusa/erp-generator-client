import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLocationFlightReportDto } from '../../models/amims-location-flight-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface LocationFlightReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function locationFlightReportControllerFindAll(http: HttpClient, rootUrl: string, params: LocationFlightReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsLocationFlightReportDto>;
    'total'?: number;
}>>;
export declare namespace locationFlightReportControllerFindAll {
    var PATH: string;
}
