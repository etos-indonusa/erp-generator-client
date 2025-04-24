import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaTransferItemDto } from '../../models/amims-qa-transfer-item-dto';
export interface QaTransferItemControllerRemove$Params {
    id: string;
}
export declare function qaTransferItemControllerRemove(http: HttpClient, rootUrl: string, params: QaTransferItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaTransferItemDto;
}>>;
export declare namespace qaTransferItemControllerRemove {
    var PATH: string;
}
