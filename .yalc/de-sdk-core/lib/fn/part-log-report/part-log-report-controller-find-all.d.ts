import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartLogReportDto } from '../../models/amims-part-log-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PartLogReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function partLogReportControllerFindAll(http: HttpClient, rootUrl: string, params: PartLogReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartLogReportDto>;
    'total'?: number;
}>>;
export declare namespace partLogReportControllerFindAll {
    var PATH: string;
}
