import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferItemDto } from '../../models/amims-store-transfer-item-dto';
export interface StoreTransferItemControllerFindOne$Params {
    id: string;
}
export declare function storeTransferItemControllerFindOne(http: HttpClient, rootUrl: string, params: StoreTransferItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreTransferItemDto;
}>>;
export declare namespace storeTransferItemControllerFindOne {
    var PATH: string;
}
