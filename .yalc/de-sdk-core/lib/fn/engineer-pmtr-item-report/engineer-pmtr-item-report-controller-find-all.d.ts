import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrItemReportDto } from '../../models/amims-engineer-pmtr-item-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface EngineerPmtrItemReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function engineerPmtrItemReportControllerFindAll(http: HttpClient, rootUrl: string, params: EngineerPmtrItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerPmtrItemReportDto>;
    'total'?: number;
}>>;
export declare namespace engineerPmtrItemReportControllerFindAll {
    var PATH: string;
}
