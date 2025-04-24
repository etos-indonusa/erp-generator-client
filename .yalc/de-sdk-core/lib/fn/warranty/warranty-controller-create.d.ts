import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsWarrantyDto } from '../../models/amims-warranty-dto';
export interface WarrantyControllerCreate$Params {
    body: AmimsWarrantyDto;
}
export declare function warrantyControllerCreate(http: HttpClient, rootUrl: string, params: WarrantyControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsWarrantyDto;
}>>;
export declare namespace warrantyControllerCreate {
    var PATH: string;
}
