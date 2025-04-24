import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTypeOfworkDto } from '../../models/amims-type-ofwork-dto';
export interface TypeOfworkControllerRemove$Params {
    id: string;
}
export declare function typeOfworkControllerRemove(http: HttpClient, rootUrl: string, params: TypeOfworkControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTypeOfworkDto;
}>>;
export declare namespace typeOfworkControllerRemove {
    var PATH: string;
}
