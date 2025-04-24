import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaTransferReportDto } from '../../models/amims-qa-transfer-report-dto';
export interface QaTransferReportControllerFindOne$Params {
    id: string;
}
export declare function qaTransferReportControllerFindOne(http: HttpClient, rootUrl: string, params: QaTransferReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaTransferReportDto;
}>>;
export declare namespace qaTransferReportControllerFindOne {
    var PATH: string;
}
