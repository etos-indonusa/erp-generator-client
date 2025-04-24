import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDoctypeDto } from '../../models/amims-doctype-dto';
export interface DoctypeControllerFindOne$Params {
    id: string;
}
export declare function doctypeControllerFindOne(http: HttpClient, rootUrl: string, params: DoctypeControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDoctypeDto;
}>>;
export declare namespace doctypeControllerFindOne {
    var PATH: string;
}
