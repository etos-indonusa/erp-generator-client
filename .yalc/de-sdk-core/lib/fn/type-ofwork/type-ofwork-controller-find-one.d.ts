import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTypeOfworkDto } from '../../models/amims-type-ofwork-dto';
export interface TypeOfworkControllerFindOne$Params {
    id: string;
}
export declare function typeOfworkControllerFindOne(http: HttpClient, rootUrl: string, params: TypeOfworkControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTypeOfworkDto;
}>>;
export declare namespace typeOfworkControllerFindOne {
    var PATH: string;
}
