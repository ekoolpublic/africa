import {Student} from "./student";

export class School {
  id: number;
  name: string;
  students: Student[];
  confirmedStudentCount: number;
  address: string;

  // random generated data for education register data
  institutionType: string[];
  ownerType: string;
  ownershipForm: string;
  activitiesForm: string[];
  studyLanguages: string[];
  phoneNumber: string;
  email: string;
  website: string;
  enrolledNr: number;
  basicEducationNr: number;
  level1Nr: number;
  level2Nr: number;
  level3Nr: number;
  gymnasiumNr: number;
  hobbyNr: number;
  vocationalNr: number;
  higherEducationNr: number;
}
