import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaTransferDto } from '../../models/amims-qa-transfer-dto';
export interface QaTransferControllerUpdate$Params {
    id: string;
    body: AmimsQaTransferDto;
}
export declare function qaTransferControllerUpdate(http: HttpClient, rootUrl: string, params: QaTransferControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaTransferDto;
}>>;
export declare namespace qaTransferControllerUpdate {
    var PATH: string;
}
