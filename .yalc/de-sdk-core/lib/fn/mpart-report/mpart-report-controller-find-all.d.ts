import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpartReportDto } from '../../models/amims-mpart-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface MpartReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function mpartReportControllerFindAll(http: HttpClient, rootUrl: string, params: MpartReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMpartReportDto>;
    'total'?: number;
}>>;
export declare namespace mpartReportControllerFindAll {
    var PATH: string;
}
