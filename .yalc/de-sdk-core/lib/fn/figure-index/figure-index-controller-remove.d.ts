import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsFigureIndexDto } from '../../models/amims-figure-index-dto';
export interface FigureIndexControllerRemove$Params {
    id: string;
}
export declare function figureIndexControllerRemove(http: HttpClient, rootUrl: string, params: FigureIndexControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsFigureIndexDto;
}>>;
export declare namespace figureIndexControllerRemove {
    var PATH: string;
}
