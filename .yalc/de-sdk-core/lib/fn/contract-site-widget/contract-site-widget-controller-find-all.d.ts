import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { BaseWidgetQueryDto } from '../../models/base-widget-query-dto';
import { Object } from '../../models/object';
import { PelangganContractSiteWidgetDto } from '../../models/pelanggan-contract-site-widget-dto';
import { SelectFieldDto } from '../../models/select-field-dto';
export interface ContractSiteWidgetControllerFindAll$Params {
    /**
     * Filter object
     */
    filter?: Object;
    /**
     * JoinWhere object
     */
    joinWhere?: Object;
    /**
     * Select fields with aggregation, e.g. [{ type: "sum", field: "nilai", alias: "totalNilai" }]
     */
    select?: Array<SelectFieldDto>;
    /**
     * Fields to group by
     */
    groupBy?: Array<string>;
    sortKey?: string;
    sortValue?: 'ASC' | 'DESC';
    body: BaseWidgetQueryDto;
}
export declare function contractSiteWidgetControllerFindAll(http: HttpClient, rootUrl: string, params: ContractSiteWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<PelangganContractSiteWidgetDto>;
    'total'?: number;
}>>;
export declare namespace contractSiteWidgetControllerFindAll {
    var PATH: string;
}
