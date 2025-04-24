import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrItemDto } from '../../models/amims-pur-pr-item-dto';
export interface PurPrItemControllerUpdate$Params {
    id: string;
    body: AmimsPurPrItemDto;
}
export declare function purPrItemControllerUpdate(http: HttpClient, rootUrl: string, params: PurPrItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrItemDto;
}>>;
export declare namespace purPrItemControllerUpdate {
    var PATH: string;
}
