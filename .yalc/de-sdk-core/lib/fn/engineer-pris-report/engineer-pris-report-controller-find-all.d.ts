import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReportDto } from '../../models/amims-engineer-pris-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface EngineerPrisReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function engineerPrisReportControllerFindAll(http: HttpClient, rootUrl: string, params: EngineerPrisReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerPrisReportDto>;
    'total'?: number;
}>>;
export declare namespace engineerPrisReportControllerFindAll {
    var PATH: string;
}
