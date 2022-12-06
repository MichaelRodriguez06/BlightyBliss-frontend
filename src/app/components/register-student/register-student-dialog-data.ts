import {Constraint} from "../../models/constraints/constraint";

export interface RegisterStudentDialogData{
  edit: boolean,
  agreementList: Constraint[],
  disabilityList: Constraint[],
  programList: Constraint[],
  levelList: Constraint[],
  studentTypeList: Constraint[],
  gendersList: Constraint[],
  documentTypesList: Constraint[],
  vulnerablePopulationList: Constraint[],
  bloodTypeList: Constraint[],
  socioeconomicStateList: Constraint[],
  maritalStatusList:  Constraint[],
}
