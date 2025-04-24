import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrDto } from '../../models/amims-pur-pr-dto';
export interface PurPrControllerRemove$Params {
    id: string;
}
export declare function purPrControllerRemove(http: HttpClient, rootUrl: string, params: PurPrControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrDto;
}>>;
export declare namespace purPrControllerRemove {
    var PATH: string;
}
