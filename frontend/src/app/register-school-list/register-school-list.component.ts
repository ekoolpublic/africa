import {Component, OnInit} from '@angular/core';
import {SchoolDataService} from "../service/school-data/school-data.service";


@Component({
  selector: 'app-register-school-list',
  templateUrl: './register-school-list.component.html',
  styleUrls: ['./register-school-list.component.css']
})
export class RegisterSchoolListComponent implements OnInit {

  mockSchools: any[];
  displayedColumns = ['id', 'name', 'institutionType', 'ownerType', 'ownershipForm', 'activitiesForm', 'address',
    'phoneNumber', 'email', 'website', 'enrolledNr'];

  constructor(private schoolDataService: SchoolDataService) {
  }

  ngOnInit() {
    this.mockSchools = SchoolDataService.getMockSchools();
  }

}
