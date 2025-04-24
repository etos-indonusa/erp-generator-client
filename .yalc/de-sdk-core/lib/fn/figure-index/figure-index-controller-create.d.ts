import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsFigureIndexDto } from '../../models/amims-figure-index-dto';
export interface FigureIndexControllerCreate$Params {
    body: AmimsFigureIndexDto;
}
export declare function figureIndexControllerCreate(http: HttpClient, rootUrl: string, params: FigureIndexControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsFigureIndexDto;
}>>;
export declare namespace figureIndexControllerCreate {
    var PATH: string;
}
