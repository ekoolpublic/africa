import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-education-register',
  templateUrl: './education-register.component.html',
  styleUrls: ['./education-register.component.css']
})
export class EducationRegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public get user() {
    return this.authService.user;
  }

  logout() {
    this.authService.user = {};
    this.router.navigateByUrl('/login');
  }

}
