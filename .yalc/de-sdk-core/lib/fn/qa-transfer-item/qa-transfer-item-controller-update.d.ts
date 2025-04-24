import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaTransferItemDto } from '../../models/amims-qa-transfer-item-dto';
export interface QaTransferItemControllerUpdate$Params {
    id: string;
    body: AmimsQaTransferItemDto;
}
export declare function qaTransferItemControllerUpdate(http: HttpClient, rootUrl: string, params: QaTransferItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaTransferItemDto;
}>>;
export declare namespace qaTransferItemControllerUpdate {
    var PATH: string;
}
