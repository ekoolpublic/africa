import {Component, OnInit, Input} from '@angular/core';
import {Student} from '../student';
import {StudentDataService} from '../service/student-data/student-data.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {SchoolDataService} from '../service/school-data/school-data.service';
import {MatSelectChange} from '@angular/material';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student;
  studentId;
  schools;
  selectedSchool;
  nearbySchools;

  constructor(private studentDataService: StudentDataService,
              private schoolDataService: SchoolDataService,
              private route: ActivatedRoute) {
    this.route.paramMap.forEach(params => {
      this.studentId = params.get('studentId');
    });
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.studentDataService.getStudent(this.studentId)
      .subscribe(data => {
        this.student = data;
        this.selectedSchool = data.schoolId;
      });
    this.schoolDataService.getSchools()
      .subscribe(data => {
        this.schools = data;
      });
    this.schoolDataService.getNearbySchools(this.studentId)
      .subscribe(data => {
        this.nearbySchools = data;
      });
  }

  designatedSchoolChanged(selectChange: MatSelectChange) {
    this.student.schoolId = selectChange.value;
  }

  studentSave() {
    this.studentDataService.saveStudent(this.student)
      .subscribe(data => this.student = data);
  }

}

