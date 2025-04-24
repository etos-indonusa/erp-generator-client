import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisItemDto } from '../../models/amims-engineer-pris-item-dto';
export interface EngineerPrisItemControllerRemove$Params {
    id: string;
}
export declare function engineerPrisItemControllerRemove(http: HttpClient, rootUrl: string, params: EngineerPrisItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisItemDto;
}>>;
export declare namespace engineerPrisItemControllerRemove {
    var PATH: string;
}
