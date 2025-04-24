import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganClientContactDto } from '../../models/pelanggan-client-contact-dto';
export interface ClientContactControllerRemove$Params {
    id: string;
}
export declare function clientContactControllerRemove(http: HttpClient, rootUrl: string, params: ClientContactControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganClientContactDto;
}>>;
export declare namespace clientContactControllerRemove {
    var PATH: string;
}
