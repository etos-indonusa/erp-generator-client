import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartConditionReportDto } from '../../models/amims-part-condition-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PartConditionReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function partConditionReportControllerFindAll(http: HttpClient, rootUrl: string, params: PartConditionReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartConditionReportDto>;
    'total'?: number;
}>>;
export declare namespace partConditionReportControllerFindAll {
    var PATH: string;
}
