import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPilotReportDto } from '../../models/amims-pilot-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PilotReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function pilotReportControllerFindAll(http: HttpClient, rootUrl: string, params: PilotReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPilotReportDto>;
    'total'?: number;
}>>;
export declare namespace pilotReportControllerFindAll {
    var PATH: string;
}
