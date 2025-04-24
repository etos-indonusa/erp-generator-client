import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsFigureIndexDto } from '../../models/amims-figure-index-dto';
export interface FigureIndexControllerFindOne$Params {
    id: string;
}
export declare function figureIndexControllerFindOne(http: HttpClient, rootUrl: string, params: FigureIndexControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsFigureIndexDto;
}>>;
export declare namespace figureIndexControllerFindOne {
    var PATH: string;
}
