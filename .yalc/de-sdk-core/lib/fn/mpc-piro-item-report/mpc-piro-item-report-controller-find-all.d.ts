import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcPiroItemReportDto } from '../../models/amims-mpc-piro-item-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface MpcPiroItemReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function mpcPiroItemReportControllerFindAll(http: HttpClient, rootUrl: string, params: MpcPiroItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMpcPiroItemReportDto>;
    'total'?: number;
}>>;
export declare namespace mpcPiroItemReportControllerFindAll {
    var PATH: string;
}
