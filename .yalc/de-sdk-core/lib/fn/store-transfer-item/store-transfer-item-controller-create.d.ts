import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferItemDto } from '../../models/amims-store-transfer-item-dto';
export interface StoreTransferItemControllerCreate$Params {
    body: AmimsStoreTransferItemDto;
}
export declare function storeTransferItemControllerCreate(http: HttpClient, rootUrl: string, params: StoreTransferItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreTransferItemDto;
}>>;
export declare namespace storeTransferItemControllerCreate {
    var PATH: string;
}
