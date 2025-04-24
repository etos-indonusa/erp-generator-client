import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsBinDto } from '../../models/amims-bin-dto';
export interface BinControllerUpdate$Params {
    id: string;
    body: AmimsBinDto;
}
export declare function binControllerUpdate(http: HttpClient, rootUrl: string, params: BinControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsBinDto;
}>>;
export declare namespace binControllerUpdate {
    var PATH: string;
}
