import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcGseReportDto } from '../../models/amims-mpc-gse-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface MpcGseReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function mpcGseReportControllerFindAll(http: HttpClient, rootUrl: string, params: MpcGseReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMpcGseReportDto>;
    'total'?: number;
}>>;
export declare namespace mpcGseReportControllerFindAll {
    var PATH: string;
}
