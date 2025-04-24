import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDoctypeDto } from '../../models/amims-doctype-dto';
export interface DoctypeControllerCreate$Params {
    body: AmimsDoctypeDto;
}
export declare function doctypeControllerCreate(http: HttpClient, rootUrl: string, params: DoctypeControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDoctypeDto;
}>>;
export declare namespace doctypeControllerCreate {
    var PATH: string;
}
