import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrItemDto } from '../../models/amims-pur-pr-item-dto';
export interface PurPrItemControllerRemove$Params {
    id: string;
}
export declare function purPrItemControllerRemove(http: HttpClient, rootUrl: string, params: PurPrItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrItemDto;
}>>;
export declare namespace purPrItemControllerRemove {
    var PATH: string;
}
