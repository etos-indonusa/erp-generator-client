import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiIdentifyReportDto } from '../../models/amims-engineer-rti-identify-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface EngineerRtiIdentifyReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function engineerRtiIdentifyReportControllerFindAll(http: HttpClient, rootUrl: string, params: EngineerRtiIdentifyReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerRtiIdentifyReportDto>;
    'total'?: number;
}>>;
export declare namespace engineerRtiIdentifyReportControllerFindAll {
    var PATH: string;
}
