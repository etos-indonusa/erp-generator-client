import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreDestroyDto } from '../../models/amims-store-destroy-dto';
export interface StoreDestroyControllerFindOne$Params {
    id: string;
}
export declare function storeDestroyControllerFindOne(http: HttpClient, rootUrl: string, params: StoreDestroyControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreDestroyDto;
}>>;
export declare namespace storeDestroyControllerFindOne {
    var PATH: string;
}
