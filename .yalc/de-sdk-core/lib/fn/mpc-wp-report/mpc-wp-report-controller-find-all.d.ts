import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcWpReportDto } from '../../models/amims-mpc-wp-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface MpcWpReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function mpcWpReportControllerFindAll(http: HttpClient, rootUrl: string, params: MpcWpReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMpcWpReportDto>;
    'total'?: number;
}>>;
export declare namespace mpcWpReportControllerFindAll {
    var PATH: string;
}
