import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SchoolDataService} from "../service/school-data/school-data.service";

@Component({
  selector: 'app-register-school-detail',
  templateUrl: './register-school-detail.component.html',
  styleUrls: ['./register-school-detail.component.css']
})
export class RegisterSchoolDetailComponent implements OnInit {

  schoolId: number;
  school: any;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.forEach(params => {
      this.schoolId = Number(params.get('id'));
      this.school = SchoolDataService.getMockSchoolById(this.schoolId);
      console.log(this.school);
    });
  }

  ngOnInit() {
  }

}
