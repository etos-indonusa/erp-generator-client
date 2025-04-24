import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdDispotitionReportDto } from '../../models/amims-qa-rpd-dispotition-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface QaRpdDispotitionReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function qaRpdDispotitionReportControllerFindAll(http: HttpClient, rootUrl: string, params: QaRpdDispotitionReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsQaRpdDispotitionReportDto>;
    'total'?: number;
}>>;
export declare namespace qaRpdDispotitionReportControllerFindAll {
    var PATH: string;
}
