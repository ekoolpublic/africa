import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

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
