import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ekool-demo',
  templateUrl: './ekool-demo.component.html',
  styleUrls: ['./ekool-demo.component.css']
})
export class EkoolDemoComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

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
