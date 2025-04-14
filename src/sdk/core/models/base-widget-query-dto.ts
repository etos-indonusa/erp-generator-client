/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { SelectFieldDto } from '../models/select-field-dto';
export interface BaseWidgetQueryDto {

  /**
   * Filter object
   */
  filter?: {
};

  /**
   * Fields to group by
   */
  groupBy?: Array<string>;

  /**
   * JoinWhere object
   */
  joinWhere?: {
};

  /**
   * Select fields with aggregation, e.g. [{ type: "sum", field: "nilai", alias: "totalNilai" }]
   */
  select?: Array<SelectFieldDto>;
  sortKey?: string;
  sortValue?: 'ASC' | 'DESC';
}
