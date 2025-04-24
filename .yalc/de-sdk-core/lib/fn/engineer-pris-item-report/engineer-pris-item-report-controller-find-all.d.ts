import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisItemReportDto } from '../../models/amims-engineer-pris-item-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface EngineerPrisItemReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function engineerPrisItemReportControllerFindAll(http: HttpClient, rootUrl: string, params: EngineerPrisItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerPrisItemReportDto>;
    'total'?: number;
}>>;
export declare namespace engineerPrisItemReportControllerFindAll {
    var PATH: string;
}
