import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsActypeReportDto } from '../../models/amims-actype-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface ActypeReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function actypeReportControllerFindAll(http: HttpClient, rootUrl: string, params: ActypeReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsActypeReportDto>;
    'total'?: number;
}>>;
export declare namespace actypeReportControllerFindAll {
    var PATH: string;
}
