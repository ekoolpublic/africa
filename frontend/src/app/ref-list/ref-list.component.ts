import {Component, OnInit, ViewChild} from '@angular/core';
import {Student} from '../student';
import {StudentDataService} from '../service/student-data/student-data.service';
import {SchoolDataService} from '../service/school-data/school-data.service';
import {MatSort, MatSortable, MatTableDataSource, MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-ref-list',
  templateUrl: './ref-list.component.html',
  styleUrls: ['./ref-list.component.css']
})
export class RefListComponent implements OnInit {

  students;
  schools;
  selectedStudent: Student;

  displayedColumns = ['idCode', 'lastName', 'school', 'status'];
  dataSource = new MatTableDataSource(this.students);
  @ViewChild(MatSort) sort: MatSort;

  constructor(private studentDataService: StudentDataService,
              private schoolDataService: SchoolDataService,
              public snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.refresh();
  }

  updateStudents(students: Student[]) {
    this.students = students;
    this.dataSource = new MatTableDataSource(this.students);
    this.dataSource.sort = this.sort;
  }

  refresh() {
    this.studentDataService.getStudents().subscribe(data => {
      this.updateStudents(data);
    });
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  loadNewStudents() {
    this.studentDataService.loadNewStudents().subscribe(data => {
      this.updateStudents(data);
      this.openSnackBar('Future students are loaded', 'Dismiss');
    });
  }

  calculateAddresses() {
    this.studentDataService.calculateAddresses().subscribe(data => {
      this.openSnackBar('Addresses are loaded', 'Dismiss');
    });
  }

  startAdmission() {
    this.studentDataService.startAdmission().subscribe(data => {
      this.openSnackBar('Admission started, values are reset', 'Dismiss');
    });
  }

  confirmStudents() {
    this.studentDataService.confirmStudents().subscribe(data => {
      this.updateStudents(data);
      this.openSnackBar('Admission confirmed', 'Dismiss');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
