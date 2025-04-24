import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsRotaryFactorReportDto } from '../../models/amims-rotary-factor-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface RotaryFactorReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function rotaryFactorReportControllerFindAll(http: HttpClient, rootUrl: string, params: RotaryFactorReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsRotaryFactorReportDto>;
    'total'?: number;
}>>;
export declare namespace rotaryFactorReportControllerFindAll {
    var PATH: string;
}
