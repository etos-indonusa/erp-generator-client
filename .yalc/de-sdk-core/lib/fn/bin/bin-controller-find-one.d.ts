import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsBinDto } from '../../models/amims-bin-dto';
export interface BinControllerFindOne$Params {
    id: string;
}
export declare function binControllerFindOne(http: HttpClient, rootUrl: string, params: BinControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsBinDto;
}>>;
export declare namespace binControllerFindOne {
    var PATH: string;
}
