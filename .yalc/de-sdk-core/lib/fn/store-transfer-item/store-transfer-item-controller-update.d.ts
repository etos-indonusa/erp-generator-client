import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferItemDto } from '../../models/amims-store-transfer-item-dto';
export interface StoreTransferItemControllerUpdate$Params {
    id: string;
    body: AmimsStoreTransferItemDto;
}
export declare function storeTransferItemControllerUpdate(http: HttpClient, rootUrl: string, params: StoreTransferItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreTransferItemDto;
}>>;
export declare namespace storeTransferItemControllerUpdate {
    var PATH: string;
}
