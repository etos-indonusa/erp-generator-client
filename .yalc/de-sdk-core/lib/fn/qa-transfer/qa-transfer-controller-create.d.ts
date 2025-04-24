import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaTransferDto } from '../../models/amims-qa-transfer-dto';
export interface QaTransferControllerCreate$Params {
    body: AmimsQaTransferDto;
}
export declare function qaTransferControllerCreate(http: HttpClient, rootUrl: string, params: QaTransferControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaTransferDto;
}>>;
export declare namespace qaTransferControllerCreate {
    var PATH: string;
}
