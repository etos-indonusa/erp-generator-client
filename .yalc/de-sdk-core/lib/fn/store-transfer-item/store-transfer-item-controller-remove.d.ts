import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferItemDto } from '../../models/amims-store-transfer-item-dto';
export interface StoreTransferItemControllerRemove$Params {
    id: string;
}
export declare function storeTransferItemControllerRemove(http: HttpClient, rootUrl: string, params: StoreTransferItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreTransferItemDto;
}>>;
export declare namespace storeTransferItemControllerRemove {
    var PATH: string;
}
