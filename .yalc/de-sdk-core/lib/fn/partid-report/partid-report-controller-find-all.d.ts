import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartidReportDto } from '../../models/amims-partid-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PartidReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function partidReportControllerFindAll(http: HttpClient, rootUrl: string, params: PartidReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartidReportDto>;
    'total'?: number;
}>>;
export declare namespace partidReportControllerFindAll {
    var PATH: string;
}
