import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganClientContactDto } from '../../models/pelanggan-client-contact-dto';
export interface ClientContactControllerUpdate$Params {
    id: string;
    body: PelangganClientContactDto;
}
export declare function clientContactControllerUpdate(http: HttpClient, rootUrl: string, params: ClientContactControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganClientContactDto;
}>>;
export declare namespace clientContactControllerUpdate {
    var PATH: string;
}
