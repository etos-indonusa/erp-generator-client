import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurPrclDto } from '../../models/amims-pur-prcl-dto';
export interface PurPrclControllerCreate$Params {
    body: AmimsPurPrclDto;
}
export declare function purPrclControllerCreate(http: HttpClient, rootUrl: string, params: PurPrclControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPurPrclDto;
}>>;
export declare namespace purPrclControllerCreate {
    var PATH: string;
}
