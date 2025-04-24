import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDoctypeDto } from '../../models/amims-doctype-dto';
export interface DoctypeControllerRemove$Params {
    id: string;
}
export declare function doctypeControllerRemove(http: HttpClient, rootUrl: string, params: DoctypeControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDoctypeDto;
}>>;
export declare namespace doctypeControllerRemove {
    var PATH: string;
}
