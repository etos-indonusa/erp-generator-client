/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { AmimsAircraftDto } from '../models/amims-aircraft-dto';
import { AmimsPartDto } from '../models/amims-part-dto';
export interface AmimsTechDefectReportDto {
  aircraft: AmimsAircraftDto;
  createdAt?: string;
  dateDefect?: string;
  doneCycle?: number;
  doneDate?: string;
  doneHours?: number;
  idAircraft?: string;
  idEngineerRti?: string;
  idPart?: string;
  idPartInstall?: string;
  idTechDefect: string;
  idTechLog?: string;
  noteDefect?: string;
  part: AmimsPartDto;
  statusDefect?: string;
  updatedAt?: string;
  userSign?: string;
}
