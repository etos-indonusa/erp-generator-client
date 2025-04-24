import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdRefReportDto } from '../../models/amims-td-ref-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface TdRefReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function tdRefReportControllerFindAll(http: HttpClient, rootUrl: string, params: TdRefReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTdRefReportDto>;
    'total'?: number;
}>>;
export declare namespace tdRefReportControllerFindAll {
    var PATH: string;
}
