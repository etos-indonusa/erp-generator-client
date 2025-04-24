import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdReportDto } from '../../models/amims-qa-rpd-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface QaRpdReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function qaRpdReportControllerFindAll(http: HttpClient, rootUrl: string, params: QaRpdReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsQaRpdReportDto>;
    'total'?: number;
}>>;
export declare namespace qaRpdReportControllerFindAll {
    var PATH: string;
}
