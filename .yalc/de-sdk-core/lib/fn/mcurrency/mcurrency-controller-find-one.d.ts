import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMcurrencyDto } from '../../models/amims-mcurrency-dto';
export interface McurrencyControllerFindOne$Params {
    id: string;
}
export declare function mcurrencyControllerFindOne(http: HttpClient, rootUrl: string, params: McurrencyControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMcurrencyDto;
}>>;
export declare namespace mcurrencyControllerFindOne {
    var PATH: string;
}
