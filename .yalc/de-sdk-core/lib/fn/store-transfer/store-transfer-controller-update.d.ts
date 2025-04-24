import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferDto } from '../../models/amims-store-transfer-dto';
export interface StoreTransferControllerUpdate$Params {
    id: string;
    body: AmimsStoreTransferDto;
}
export declare function storeTransferControllerUpdate(http: HttpClient, rootUrl: string, params: StoreTransferControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreTransferDto;
}>>;
export declare namespace storeTransferControllerUpdate {
    var PATH: string;
}
