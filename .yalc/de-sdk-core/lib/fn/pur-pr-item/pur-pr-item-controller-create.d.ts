import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrItemDto } from '../../models/amims-pur-pr-item-dto';
export interface PurPrItemControllerCreate$Params {
    body: AmimsPurPrItemDto;
}
export declare function purPrItemControllerCreate(http: HttpClient, rootUrl: string, params: PurPrItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrItemDto;
}>>;
export declare namespace purPrItemControllerCreate {
    var PATH: string;
}
