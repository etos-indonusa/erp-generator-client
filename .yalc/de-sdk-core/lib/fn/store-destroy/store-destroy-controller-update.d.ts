import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreDestroyDto } from '../../models/amims-store-destroy-dto';
export interface StoreDestroyControllerUpdate$Params {
    id: string;
    body: AmimsStoreDestroyDto;
}
export declare function storeDestroyControllerUpdate(http: HttpClient, rootUrl: string, params: StoreDestroyControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreDestroyDto;
}>>;
export declare namespace storeDestroyControllerUpdate {
    var PATH: string;
}
