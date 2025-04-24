import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogTransferDto } from '../../models/amims-log-transfer-dto';
export interface LogTransferControllerUpdate$Params {
    id: string;
    body: AmimsLogTransferDto;
}
export declare function logTransferControllerUpdate(http: HttpClient, rootUrl: string, params: LogTransferControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogTransferDto;
}>>;
export declare namespace logTransferControllerUpdate {
    var PATH: string;
}
