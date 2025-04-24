import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaTransferReportDto } from '../../models/amims-qa-transfer-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface QaTransferReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function qaTransferReportControllerFindAll(http: HttpClient, rootUrl: string, params: QaTransferReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsQaTransferReportDto>;
    'total'?: number;
}>>;
export declare namespace qaTransferReportControllerFindAll {
    var PATH: string;
}
