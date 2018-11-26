import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolDataService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  public getSchools(): Observable<any> {
    return this.http.get(`${this.apiUrl}/schools`);
  }

  public getSchool(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/schools/${id}`);
  }

  public addSchool(school: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/schools/add`, school);
  }

  getNearbySchools(studentId: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/schools/nearby/${studentId}`);
  }

  // random data for education register data
  static mockSchools: any[] = [
    {
      id: 1002,
      name: "Mvita Primary School",
      institutionType: ["general education institution"],
      ownerType: "local government",
      ownershipForm: "municipality",
      ownerName: "City of Mombasa",
      activitiesForm: ["basic education at I-III level"],
      studyLanguages: ["English"],
      address: "Narok Rd 82",
      phoneNumber: "-",
      email: "-",
      website: "http://www.mvitaprimary.com/",
      enrolledNr: 712,
      basicEducationNr: 712,
      level1Nr: 268,
      level2Nr: 213,
      level3Nr: 231,
      gymnasiumNr: 0,
      hobbyNr: 0,
      vocationalNr: 0,
      higherEducationNr: 0,
    },
    {
      id: 1003,
      name: "Makande Girls Secondary School",
      institutionType: ["general education institution"],
      ownerType: "-",
      ownershipForm: "-",
      ownerName: "-",
      activitiesForm: ["Gymnasium"],
      studyLanguages: ["English"],
      address: "Masai St 40",
      phoneNumber: "-",
      email: "-",
      website: "-",
      enrolledNr: 500,
      basicEducationNr: 0,
      level1Nr: 0,
      level2Nr: 0,
      level3Nr: 0,
      gymnasiumNr: 500,
      hobbyNr: 0,
      vocationalNr: 0,
      higherEducationNr: 0,
    },
    {
      id: 1004,
      name: "Abu Hureira Academy",
      institutionType: ["general education institution"],
      ownerType: "-",
      ownershipForm: "private property",
      ownerName: "Abu Hureira Academy",
      activitiesForm: ["basic education at I-III level", "Gymnasium"],
      studyLanguages: ["English"],
      address: "Dar Es Salam Rd 154",
      phoneNumber: "+254(722)427230",
      email: "info@abuhureira.ac.ke",
      website: "http://www.abuhureira.ac.ke/",
      enrolledNr: 1450,
      basicEducationNr: 950,
      level1Nr: 300,
      level2Nr: 241,
      level3Nr: 409,
      gymnasiumNr: 500,
      hobbyNr: 0,
      vocationalNr: 0,
      higherEducationNr: 0,
    },
    {
      id: 1005,
      name: "Mombasa Hobby School",
      institutionType: ["hobby school "],
      ownerType: "non-profit organisation",
      ownershipForm: "private property",
      ownerName: "Mombasa Hobby School Ltd",
      activitiesForm: ["Hobby education"],
      studyLanguages: ["English"],
      address: "-",
      phoneNumber: "-",
      email: "-",
      website: "mombasahobby.com",
      enrolledNr: 250,
      basicEducationNr: 0,
      level1Nr: 0,
      level2Nr: 0,
      level3Nr: 0,
      gymnasiumNr: 0,
      hobbyNr: 250,
      vocationalNr: 0,
      higherEducationNr: 0
    },
    {
      id: 1006,
      name: "Mombasa Vocational School",
      institutionType: ["vocational school"],
      ownerType: "ministry of education",
      ownershipForm: "public administration",
      ownerName: "Ministry of Education",
      activitiesForm: ["Vocational education"],
      studyLanguages: ["English"],
      address: "-",
      phoneNumber: "-",
      email: "-",
      website: "mombasavocational.com",
      enrolledNr: 750,
      basicEducationNr: 0,
      level1Nr: 0,
      level2Nr: 0,
      level3Nr: 0,
      gymnasiumNr: 0,
      hobbyNr: 0,
      vocationalNr: 750,
      higherEducationNr: 0
    }
    ,
    {
      id: 1007,
      name: "Mombasa University",
      institutionType: ["University"],
      ownerType: "a public-law entity",
      ownershipForm: "public law",
      ownerName: "Mombasa University",
      activitiesForm: ["Higher education"],
      studyLanguages: ["-"],
      address: "-",
      phoneNumber: "-",
      email: "-",
      website: "mombasauniversity.com",
      enrolledNr: 5600,
      basicEducationNr: 0,
      level1Nr: 0,
      level2Nr: 0,
      level3Nr: 0,
      gymnasiumNr: 0,
      hobbyNr: 0,
      vocationalNr: 0,
      higherEducationNr: 5600,
    }
  ];
  static getMockSchools(): any[] {
    return this.mockSchools;
  }

  static idToIndex: {} = {
    1002: 0,
    1003: 1,
    1004: 2,
    1005: 3,
    1006: 4,
    1007: 5
  };
  static getMockSchoolById(id): any {
    return this.mockSchools[this.idToIndex[id]];
  }
}
