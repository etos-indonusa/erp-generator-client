import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsBinReportDto } from '../../models/amims-bin-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface BinReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function binReportControllerFindAll(http: HttpClient, rootUrl: string, params: BinReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsBinReportDto>;
    'total'?: number;
}>>;
export declare namespace binReportControllerFindAll {
    var PATH: string;
}
