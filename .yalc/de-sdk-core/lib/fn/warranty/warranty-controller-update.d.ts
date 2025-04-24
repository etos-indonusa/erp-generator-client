import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsWarrantyDto } from '../../models/amims-warranty-dto';
export interface WarrantyControllerUpdate$Params {
    id: string;
    body: AmimsWarrantyDto;
}
export declare function warrantyControllerUpdate(http: HttpClient, rootUrl: string, params: WarrantyControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsWarrantyDto;
}>>;
export declare namespace warrantyControllerUpdate {
    var PATH: string;
}
