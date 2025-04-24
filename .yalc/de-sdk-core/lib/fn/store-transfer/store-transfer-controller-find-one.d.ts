import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferDto } from '../../models/amims-store-transfer-dto';
export interface StoreTransferControllerFindOne$Params {
    id: string;
}
export declare function storeTransferControllerFindOne(http: HttpClient, rootUrl: string, params: StoreTransferControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreTransferDto;
}>>;
export declare namespace storeTransferControllerFindOne {
    var PATH: string;
}
