export class Student {
  idCode: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  addressId: number;
  longitude: number;
  latitude: number;
  parentWishSchoolName: string;

  schoolId: number;
  schoolName: string;
  status: string;
}

export enum Gender {
  MALE,
  FEMALE,
  OTHER
}
