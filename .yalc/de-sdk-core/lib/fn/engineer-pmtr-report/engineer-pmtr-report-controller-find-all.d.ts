import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrReportDto } from '../../models/amims-engineer-pmtr-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface EngineerPmtrReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function engineerPmtrReportControllerFindAll(http: HttpClient, rootUrl: string, params: EngineerPmtrReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerPmtrReportDto>;
    'total'?: number;
}>>;
export declare namespace engineerPmtrReportControllerFindAll {
    var PATH: string;
}
