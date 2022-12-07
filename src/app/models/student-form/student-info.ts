export interface StudentInfo {
  documentNumber: string | undefined,
  documentType: string,
  firstName: string,
  lastName: string,
  email: string,
  address: string,
  neighborhood: string,
  personType: string,
  vulnerablePopulation: string,
  gender: string,
  bloodType: string,
  birthDay: Date | undefined,
  maritalStatus: string,
  socioeconomicStratum: number,
  eps: string,
  institution: string,
  idCity: number,
  idBornPlace: number,
  idDisability: number,
  academicTraining: string,
  idStudentType: number,
  residentPlaceLastFiveYears: string,
  phoneNumbers: string[]
}