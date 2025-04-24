import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartFigureIndexDto } from '../../models/amims-part-figure-index-dto';
export interface PartFigureIndexControllerFindOne$Params {
    id: string;
}
export declare function partFigureIndexControllerFindOne(http: HttpClient, rootUrl: string, params: PartFigureIndexControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartFigureIndexDto;
}>>;
export declare namespace partFigureIndexControllerFindOne {
    var PATH: string;
}
