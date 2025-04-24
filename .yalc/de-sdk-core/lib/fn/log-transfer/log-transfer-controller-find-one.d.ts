import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogTransferDto } from '../../models/amims-log-transfer-dto';
export interface LogTransferControllerFindOne$Params {
    id: string;
}
export declare function logTransferControllerFindOne(http: HttpClient, rootUrl: string, params: LogTransferControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLogTransferDto;
}>>;
export declare namespace logTransferControllerFindOne {
    var PATH: string;
}
