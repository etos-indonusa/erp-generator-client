import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnItemDto } from '../../models/amims-engineer-pris-return-item-dto';
export interface EngineerPrisReturnItemControllerRemove$Params {
    id: string;
}
export declare function engineerPrisReturnItemControllerRemove(http: HttpClient, rootUrl: string, params: EngineerPrisReturnItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisReturnItemDto;
}>>;
export declare namespace engineerPrisReturnItemControllerRemove {
    var PATH: string;
}
