import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferDto } from '../../models/amims-store-transfer-dto';
export interface StoreTransferControllerCreate$Params {
    body: AmimsStoreTransferDto;
}
export declare function storeTransferControllerCreate(http: HttpClient, rootUrl: string, params: StoreTransferControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreTransferDto;
}>>;
export declare namespace storeTransferControllerCreate {
    var PATH: string;
}
