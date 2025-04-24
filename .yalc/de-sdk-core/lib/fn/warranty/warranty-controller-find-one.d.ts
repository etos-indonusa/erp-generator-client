import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsWarrantyDto } from '../../models/amims-warranty-dto';
export interface WarrantyControllerFindOne$Params {
    id: string;
}
export declare function warrantyControllerFindOne(http: HttpClient, rootUrl: string, params: WarrantyControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsWarrantyDto;
}>>;
export declare namespace warrantyControllerFindOne {
    var PATH: string;
}
