import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMcurrencyDto } from '../../models/amims-mcurrency-dto';
export interface McurrencyControllerUpdate$Params {
    id: string;
    body: AmimsMcurrencyDto;
}
export declare function mcurrencyControllerUpdate(http: HttpClient, rootUrl: string, params: McurrencyControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMcurrencyDto;
}>>;
export declare namespace mcurrencyControllerUpdate {
    var PATH: string;
}
