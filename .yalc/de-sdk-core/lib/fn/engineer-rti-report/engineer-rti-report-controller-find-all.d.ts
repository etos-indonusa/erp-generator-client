import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiReportDto } from '../../models/amims-engineer-rti-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface EngineerRtiReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function engineerRtiReportControllerFindAll(http: HttpClient, rootUrl: string, params: EngineerRtiReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerRtiReportDto>;
    'total'?: number;
}>>;
export declare namespace engineerRtiReportControllerFindAll {
    var PATH: string;
}
