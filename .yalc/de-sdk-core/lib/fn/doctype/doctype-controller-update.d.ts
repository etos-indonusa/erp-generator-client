import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDoctypeDto } from '../../models/amims-doctype-dto';
export interface DoctypeControllerUpdate$Params {
    id: string;
    body: AmimsDoctypeDto;
}
export declare function doctypeControllerUpdate(http: HttpClient, rootUrl: string, params: DoctypeControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDoctypeDto;
}>>;
export declare namespace doctypeControllerUpdate {
    var PATH: string;
}
