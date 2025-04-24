import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiPartReportDto } from '../../models/amims-engineer-rti-part-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface EngineerRtiPartReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function engineerRtiPartReportControllerFindAll(http: HttpClient, rootUrl: string, params: EngineerRtiPartReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerRtiPartReportDto>;
    'total'?: number;
}>>;
export declare namespace engineerRtiPartReportControllerFindAll {
    var PATH: string;
}
