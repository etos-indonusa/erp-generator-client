import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnReportDto } from '../../models/amims-engineer-pris-return-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface EngineerPrisReturnReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function engineerPrisReturnReportControllerFindAll(http: HttpClient, rootUrl: string, params: EngineerPrisReturnReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerPrisReturnReportDto>;
    'total'?: number;
}>>;
export declare namespace engineerPrisReturnReportControllerFindAll {
    var PATH: string;
}
