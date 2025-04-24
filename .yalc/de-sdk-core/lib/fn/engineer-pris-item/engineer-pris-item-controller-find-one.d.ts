import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisItemDto } from '../../models/amims-engineer-pris-item-dto';
export interface EngineerPrisItemControllerFindOne$Params {
    id: string;
}
export declare function engineerPrisItemControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerPrisItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisItemDto;
}>>;
export declare namespace engineerPrisItemControllerFindOne {
    var PATH: string;
}
