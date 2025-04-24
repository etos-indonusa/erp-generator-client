import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsBinDto } from '../../models/amims-bin-dto';
export interface BinControllerRemove$Params {
    id: string;
}
export declare function binControllerRemove(http: HttpClient, rootUrl: string, params: BinControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsBinDto;
}>>;
export declare namespace binControllerRemove {
    var PATH: string;
}
