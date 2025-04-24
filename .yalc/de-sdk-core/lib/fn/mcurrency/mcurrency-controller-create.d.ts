import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMcurrencyDto } from '../../models/amims-mcurrency-dto';
export interface McurrencyControllerCreate$Params {
    body: AmimsMcurrencyDto;
}
export declare function mcurrencyControllerCreate(http: HttpClient, rootUrl: string, params: McurrencyControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMcurrencyDto;
}>>;
export declare namespace mcurrencyControllerCreate {
    var PATH: string;
}
