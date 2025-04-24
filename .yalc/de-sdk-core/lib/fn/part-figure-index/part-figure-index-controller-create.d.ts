import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartFigureIndexDto } from '../../models/amims-part-figure-index-dto';
export interface PartFigureIndexControllerCreate$Params {
    body: AmimsPartFigureIndexDto;
}
export declare function partFigureIndexControllerCreate(http: HttpClient, rootUrl: string, params: PartFigureIndexControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartFigureIndexDto;
}>>;
export declare namespace partFigureIndexControllerCreate {
    var PATH: string;
}
