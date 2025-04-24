import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogTransferReportDto } from '../../models/amims-log-transfer-report-dto';
export interface LogTransferReportControllerFindOne$Params {
    id: string;
}
export declare function logTransferReportControllerFindOne(http: HttpClient, rootUrl: string, params: LogTransferReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogTransferReportDto;
}>>;
export declare namespace logTransferReportControllerFindOne {
    var PATH: string;
}
