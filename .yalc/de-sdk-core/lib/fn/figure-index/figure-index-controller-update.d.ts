import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsFigureIndexDto } from '../../models/amims-figure-index-dto';
export interface FigureIndexControllerUpdate$Params {
    id: string;
    body: AmimsFigureIndexDto;
}
export declare function figureIndexControllerUpdate(http: HttpClient, rootUrl: string, params: FigureIndexControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsFigureIndexDto;
}>>;
export declare namespace figureIndexControllerUpdate {
    var PATH: string;
}
