import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrclDto } from '../../models/amims-pur-prcl-dto';
export interface PurPrclControllerRemove$Params {
    id: string;
}
export declare function purPrclControllerRemove(http: HttpClient, rootUrl: string, params: PurPrclControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrclDto;
}>>;
export declare namespace purPrclControllerRemove {
    var PATH: string;
}
