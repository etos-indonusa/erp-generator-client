import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { BaseWidgetQueryDto } from '../../models/base-widget-query-dto';
import { PelangganContractWidgetDto } from '../../models/pelanggan-contract-widget-dto';
export interface ContractWidgetControllerFindAll$Params {
    body: BaseWidgetQueryDto;
}
export declare function contractWidgetControllerFindAll(http: HttpClient, rootUrl: string, params: ContractWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<PelangganContractWidgetDto>;
    'total'?: number;
}>>;
export declare namespace contractWidgetControllerFindAll {
    var PATH: string;
}
