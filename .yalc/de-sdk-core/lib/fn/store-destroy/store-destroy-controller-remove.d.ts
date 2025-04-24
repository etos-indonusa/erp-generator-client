import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreDestroyDto } from '../../models/amims-store-destroy-dto';
export interface StoreDestroyControllerRemove$Params {
    id: string;
}
export declare function storeDestroyControllerRemove(http: HttpClient, rootUrl: string, params: StoreDestroyControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreDestroyDto;
}>>;
export declare namespace storeDestroyControllerRemove {
    var PATH: string;
}
