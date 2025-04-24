import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrDto } from '../../models/amims-pur-pr-dto';
export interface PurPrControllerUpdate$Params {
    id: string;
    body: AmimsPurPrDto;
}
export declare function purPrControllerUpdate(http: HttpClient, rootUrl: string, params: PurPrControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrDto;
}>>;
export declare namespace purPrControllerUpdate {
    var PATH: string;
}
