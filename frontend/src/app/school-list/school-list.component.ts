import {Component, OnInit} from '@angular/core';
import {SchoolDataService} from "../service/school-data/school-data.service";
import {School} from "../school";


@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  schools = [];
  selectedSchool: School;

  displayedColumns = ['name', 'students'];

  constructor(private schoolDataService: SchoolDataService) {
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.schoolDataService.getSchools().subscribe(data => {
      data.forEach(function (school) {
        school.confirmedStudentCount = 0;
        school.students.forEach(function (student) {
          if (student.status == 'CONFIRMED') school.confirmedStudentCount++;
        });
      });
      this.schools = data;
    });
  }

  onSelect(school: School): void {
    this.selectedSchool = school;
  }

}
