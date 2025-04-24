import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPositionReportDto } from '../../models/amims-position-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PositionReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function positionReportControllerFindAll(http: HttpClient, rootUrl: string, params: PositionReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPositionReportDto>;
    'total'?: number;
}>>;
export declare namespace positionReportControllerFindAll {
    var PATH: string;
}
