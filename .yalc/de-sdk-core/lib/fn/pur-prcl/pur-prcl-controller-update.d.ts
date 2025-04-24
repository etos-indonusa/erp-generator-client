import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrclDto } from '../../models/amims-pur-prcl-dto';
export interface PurPrclControllerUpdate$Params {
    id: string;
    body: AmimsPurPrclDto;
}
export declare function purPrclControllerUpdate(http: HttpClient, rootUrl: string, params: PurPrclControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrclDto;
}>>;
export declare namespace purPrclControllerUpdate {
    var PATH: string;
}
