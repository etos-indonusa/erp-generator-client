import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartFigureIndexDto } from '../../models/amims-part-figure-index-dto';
export interface PartFigureIndexControllerRemove$Params {
    id: string;
}
export declare function partFigureIndexControllerRemove(http: HttpClient, rootUrl: string, params: PartFigureIndexControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartFigureIndexDto;
}>>;
export declare namespace partFigureIndexControllerRemove {
    var PATH: string;
}
