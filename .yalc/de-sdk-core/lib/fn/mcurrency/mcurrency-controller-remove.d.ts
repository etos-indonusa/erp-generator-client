import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMcurrencyDto } from '../../models/amims-mcurrency-dto';
export interface McurrencyControllerRemove$Params {
    id: string;
}
export declare function mcurrencyControllerRemove(http: HttpClient, rootUrl: string, params: McurrencyControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMcurrencyDto;
}>>;
export declare namespace mcurrencyControllerRemove {
    var PATH: string;
}
