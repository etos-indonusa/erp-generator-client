/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { AmimsMaintenanceDto } from '../models/amims-maintenance-dto';
import { AmimsPartDto } from '../models/amims-part-dto';
export interface AmimsMpcJoReportDto {
  action?: string;
  compliteCycle?: number;
  compliteDate?: string;
  compliteHours?: number;
  createdAt?: string;
  customIssued?: string;
  customJob?: string;
  customRef?: string;
  cycleFrom?: number;
  cycleTo?: number;
  dateJo?: string;
  hourseFrom?: number;
  hourseTo?: number;
  idDueList?: string;
  idMaintenance?: string;
  idMpcJo: string;
  idPart?: string;
  idTechLog?: string;
  idTypeOfwork?: string;
  idUser?: string;
  isPriority?: string;
  maintenance: AmimsMaintenanceDto;
  noteJo?: string;
  numberJo?: string;
  onAircraft?: string;
  onSite?: number;
  originalCycle?: number;
  originalDate?: string;
  originalHours?: number;
  parentAss?: string;
  part: AmimsPartDto;
  reference?: string;
  roflag?: string;
  statusJo?: string;
  timeRangeFrom?: number;
  timeRangeTo?: number;
  updatedAt?: string;
  workDue?: string;
}
