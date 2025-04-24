import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartActypeReportDto } from '../../models/amims-part-actype-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PartActypeReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function partActypeReportControllerFindAll(http: HttpClient, rootUrl: string, params: PartActypeReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartActypeReportDto>;
    'total'?: number;
}>>;
export declare namespace partActypeReportControllerFindAll {
    var PATH: string;
}
