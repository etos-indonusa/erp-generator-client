import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcJoOperatorReportDto } from '../../models/amims-mpc-jo-operator-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface MpcJoOperatorReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function mpcJoOperatorReportControllerFindAll(http: HttpClient, rootUrl: string, params: MpcJoOperatorReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMpcJoOperatorReportDto>;
    'total'?: number;
}>>;
export declare namespace mpcJoOperatorReportControllerFindAll {
    var PATH: string;
}
