import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcPiroReportDto } from '../../models/amims-mpc-piro-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface MpcPiroReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function mpcPiroReportControllerFindAll(http: HttpClient, rootUrl: string, params: MpcPiroReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMpcPiroReportDto>;
    'total'?: number;
}>>;
export declare namespace mpcPiroReportControllerFindAll {
    var PATH: string;
}
