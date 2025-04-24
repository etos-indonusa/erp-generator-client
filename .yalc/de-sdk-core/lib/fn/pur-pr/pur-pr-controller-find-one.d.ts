import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrDto } from '../../models/amims-pur-pr-dto';
export interface PurPrControllerFindOne$Params {
    id: string;
}
export declare function purPrControllerFindOne(http: HttpClient, rootUrl: string, params: PurPrControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrDto;
}>>;
export declare namespace purPrControllerFindOne {
    var PATH: string;
}
