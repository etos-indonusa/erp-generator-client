import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsBinDto } from '../../models/amims-bin-dto';
export interface BinControllerCreate$Params {
    body: AmimsBinDto;
}
export declare function binControllerCreate(http: HttpClient, rootUrl: string, params: BinControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsBinDto;
}>>;
export declare namespace binControllerCreate {
    var PATH: string;
}
