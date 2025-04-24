import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaTransferDto } from '../../models/amims-qa-transfer-dto';
export interface QaTransferControllerRemove$Params {
    id: string;
}
export declare function qaTransferControllerRemove(http: HttpClient, rootUrl: string, params: QaTransferControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaTransferDto;
}>>;
export declare namespace qaTransferControllerRemove {
    var PATH: string;
}
