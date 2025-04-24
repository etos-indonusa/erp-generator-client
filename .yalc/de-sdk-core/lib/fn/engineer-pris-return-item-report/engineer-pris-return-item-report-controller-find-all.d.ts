import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnItemReportDto } from '../../models/amims-engineer-pris-return-item-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface EngineerPrisReturnItemReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function engineerPrisReturnItemReportControllerFindAll(http: HttpClient, rootUrl: string, params: EngineerPrisReturnItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerPrisReturnItemReportDto>;
    'total'?: number;
}>>;
export declare namespace engineerPrisReturnItemReportControllerFindAll {
    var PATH: string;
}
