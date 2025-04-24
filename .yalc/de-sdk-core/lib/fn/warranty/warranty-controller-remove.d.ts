import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsWarrantyDto } from '../../models/amims-warranty-dto';
export interface WarrantyControllerRemove$Params {
    id: string;
}
export declare function warrantyControllerRemove(http: HttpClient, rootUrl: string, params: WarrantyControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsWarrantyDto;
}>>;
export declare namespace warrantyControllerRemove {
    var PATH: string;
}
