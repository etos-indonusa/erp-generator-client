import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferDto } from '../../models/amims-store-transfer-dto';
export interface StoreTransferControllerRemove$Params {
    id: string;
}
export declare function storeTransferControllerRemove(http: HttpClient, rootUrl: string, params: StoreTransferControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreTransferDto;
}>>;
export declare namespace storeTransferControllerRemove {
    var PATH: string;
}
