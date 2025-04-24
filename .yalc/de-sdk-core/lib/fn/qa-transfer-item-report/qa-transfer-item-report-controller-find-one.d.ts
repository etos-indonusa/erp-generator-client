import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaTransferItemReportDto } from '../../models/amims-qa-transfer-item-report-dto';
export interface QaTransferItemReportControllerFindOne$Params {
    id: string;
}
export declare function qaTransferItemReportControllerFindOne(http: HttpClient, rootUrl: string, params: QaTransferItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaTransferItemReportDto;
}>>;
export declare namespace qaTransferItemReportControllerFindOne {
    var PATH: string;
}
