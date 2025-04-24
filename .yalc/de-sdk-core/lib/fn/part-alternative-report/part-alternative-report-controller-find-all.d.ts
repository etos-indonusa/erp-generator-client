import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAlternativeReportDto } from '../../models/amims-part-alternative-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PartAlternativeReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function partAlternativeReportControllerFindAll(http: HttpClient, rootUrl: string, params: PartAlternativeReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartAlternativeReportDto>;
    'total'?: number;
}>>;
export declare namespace partAlternativeReportControllerFindAll {
    var PATH: string;
}
