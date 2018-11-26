import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentDataService} from "../service/student-data/student-data.service";
import {SchoolDataService} from "../service/school-data/school-data.service";
import {ActivatedRoute} from "@angular/router";
import {Student} from "../student";
import {MatSort, MatTableDataSource} from "@angular/material";
import {School} from "../school";

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {

  school = {
    "name": ""
  };
  schoolId: number;
  students;
  displayedColumns = ['idCode', 'lastName', 'birthDate', 'address'];
  dataSource = new MatTableDataSource(this.students);
  @ViewChild(MatSort) sort: MatSort;

  constructor(private studentDataService: StudentDataService,
              private schoolDataService: SchoolDataService,
              private route: ActivatedRoute) {
    this.route.paramMap.forEach(params => {
      this.schoolId = Number(params.get('id'));
    });
  }

  updateStudents(students: Student[]) {
    this.students = students;
    this.dataSource = new MatTableDataSource(this.students);
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.studentDataService.getStudentsForSchool(this.schoolId)
      .subscribe(data => {
        this.updateStudents(data);
      });
    this.schoolDataService.getSchool(this.schoolId).subscribe(data => {
      this.school = data;
    });
  }

}
