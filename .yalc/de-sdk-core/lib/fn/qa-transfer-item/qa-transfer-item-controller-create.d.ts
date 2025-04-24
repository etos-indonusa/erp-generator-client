import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaTransferItemDto } from '../../models/amims-qa-transfer-item-dto';
export interface QaTransferItemControllerCreate$Params {
    body: AmimsQaTransferItemDto;
}
export declare function qaTransferItemControllerCreate(http: HttpClient, rootUrl: string, params: QaTransferItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaTransferItemDto;
}>>;
export declare namespace qaTransferItemControllerCreate {
    var PATH: string;
}
