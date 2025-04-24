import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogTransferDto } from '../../models/amims-log-transfer-dto';
export interface LogTransferControllerRemove$Params {
    id: string;
}
export declare function logTransferControllerRemove(http: HttpClient, rootUrl: string, params: LogTransferControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogTransferDto;
}>>;
export declare namespace logTransferControllerRemove {
    var PATH: string;
}
