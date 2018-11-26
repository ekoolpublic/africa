import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

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
