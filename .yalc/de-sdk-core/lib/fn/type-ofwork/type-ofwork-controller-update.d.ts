import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTypeOfworkDto } from '../../models/amims-type-ofwork-dto';
export interface TypeOfworkControllerUpdate$Params {
    id: string;
    body: AmimsTypeOfworkDto;
}
export declare function typeOfworkControllerUpdate(http: HttpClient, rootUrl: string, params: TypeOfworkControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTypeOfworkDto;
}>>;
export declare namespace typeOfworkControllerUpdate {
    var PATH: string;
}
