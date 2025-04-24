import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreDestroyDto } from '../../models/amims-store-destroy-dto';
export interface StoreDestroyControllerCreate$Params {
    body: AmimsStoreDestroyDto;
}
export declare function storeDestroyControllerCreate(http: HttpClient, rootUrl: string, params: StoreDestroyControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreDestroyDto;
}>>;
export declare namespace storeDestroyControllerCreate {
    var PATH: string;
}
