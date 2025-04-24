import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartFigureIndexDto } from '../../models/amims-part-figure-index-dto';
export interface PartFigureIndexControllerUpdate$Params {
    id: string;
    body: AmimsPartFigureIndexDto;
}
export declare function partFigureIndexControllerUpdate(http: HttpClient, rootUrl: string, params: PartFigureIndexControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartFigureIndexDto;
}>>;
export declare namespace partFigureIndexControllerUpdate {
    var PATH: string;
}
