import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcJoReportDto } from '../../models/amims-mpc-jo-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface MpcJoReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function mpcJoReportControllerFindAll(http: HttpClient, rootUrl: string, params: MpcJoReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMpcJoReportDto>;
    'total'?: number;
}>>;
export declare namespace mpcJoReportControllerFindAll {
    var PATH: string;
}
