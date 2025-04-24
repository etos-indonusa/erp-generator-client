import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrItemDto } from '../../models/amims-pur-pr-item-dto';
export interface PurPrItemControllerFindOne$Params {
    id: string;
}
export declare function purPrItemControllerFindOne(http: HttpClient, rootUrl: string, params: PurPrItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrItemDto;
}>>;
export declare namespace purPrItemControllerFindOne {
    var PATH: string;
}
