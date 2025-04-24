import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrDto } from '../../models/amims-pur-pr-dto';
export interface PurPrControllerCreate$Params {
    body: AmimsPurPrDto;
}
export declare function purPrControllerCreate(http: HttpClient, rootUrl: string, params: PurPrControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrDto;
}>>;
export declare namespace purPrControllerCreate {
    var PATH: string;
}
