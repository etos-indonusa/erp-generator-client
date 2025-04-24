import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrclDto } from '../../models/amims-pur-prcl-dto';
export interface PurPrclControllerFindOne$Params {
    id: string;
}
export declare function purPrclControllerFindOne(http: HttpClient, rootUrl: string, params: PurPrclControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrclDto;
}>>;
export declare namespace purPrclControllerFindOne {
    var PATH: string;
}
