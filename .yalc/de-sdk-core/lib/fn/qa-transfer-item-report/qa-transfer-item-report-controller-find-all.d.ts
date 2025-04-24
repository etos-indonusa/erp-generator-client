import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaTransferItemReportDto } from '../../models/amims-qa-transfer-item-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface QaTransferItemReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function qaTransferItemReportControllerFindAll(http: HttpClient, rootUrl: string, params: QaTransferItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsQaTransferItemReportDto>;
    'total'?: number;
}>>;
export declare namespace qaTransferItemReportControllerFindAll {
    var PATH: string;
}
