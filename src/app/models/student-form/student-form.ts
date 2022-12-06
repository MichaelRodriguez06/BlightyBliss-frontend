import {StudentInfo} from "./student-info";
import {StudentParent} from "./student-parent";
import {StudentAttendant} from "./student-attendant";
import {StudentEnrollment} from "./student-enrollment";

export interface StudentForm {
  studentInfo: StudentInfo
  studentFather?: StudentParent
  studentMother?: StudentParent
  studentAttendant?: StudentAttendant
  studentEnrollment: StudentEnrollment
}
