import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTypeOfworkDto } from '../../models/amims-type-ofwork-dto';
export interface TypeOfworkControllerCreate$Params {
    body: AmimsTypeOfworkDto;
}
export declare function typeOfworkControllerCreate(http: HttpClient, rootUrl: string, params: TypeOfworkControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTypeOfworkDto;
}>>;
export declare namespace typeOfworkControllerCreate {
    var PATH: string;
}
