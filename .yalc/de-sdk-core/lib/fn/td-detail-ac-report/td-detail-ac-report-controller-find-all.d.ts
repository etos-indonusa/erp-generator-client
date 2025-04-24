import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDetailAcReportDto } from '../../models/amims-td-detail-ac-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface TdDetailAcReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function tdDetailAcReportControllerFindAll(http: HttpClient, rootUrl: string, params: TdDetailAcReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTdDetailAcReportDto>;
    'total'?: number;
}>>;
export declare namespace tdDetailAcReportControllerFindAll {
    var PATH: string;
}
