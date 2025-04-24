import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaTransferItemDto } from '../../models/amims-qa-transfer-item-dto';
export interface QaTransferItemControllerFindOne$Params {
    id: string;
}
export declare function qaTransferItemControllerFindOne(http: HttpClient, rootUrl: string, params: QaTransferItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaTransferItemDto;
}>>;
export declare namespace qaTransferItemControllerFindOne {
    var PATH: string;
}
