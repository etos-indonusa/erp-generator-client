import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartReportDto } from '../../models/amims-part-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PartReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function partReportControllerFindAll(http: HttpClient, rootUrl: string, params: PartReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartReportDto>;
    'total'?: number;
}>>;
export declare namespace partReportControllerFindAll {
    var PATH: string;
}
