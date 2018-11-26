import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  idCode;
  smartIdSession;
  polling = false;
  challenge;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    console.log(userData);
    if (userData) {
      const dataObject = JSON.parse(userData);
      if (dataObject.idCode) {
        this.authService.user = dataObject;
        this.router.navigateByUrl('/main-page');
      }
    }
  }

  startSmartIdAuth() {
    this.authService.startSmartIdAuth(this.idCode)
      .subscribe(data => {
        if (!data.isError && data.sessionId) {
          this.smartIdSession = data.sessionId;
          this.challenge = data.challenge;
          this.polling = true;
          this.pollSmartId();
        } else {
          alert('SmartID login failed, check your id-code!');
        }
      });
  }

  pollSmartId() {
    this.authService.pollSmartId(this.smartIdSession)
      .subscribe(data => {
        if (data.state === 'RUNNING') {
          setTimeout(() => this.pollSmartId(), 500);
        } else if (data.result.endResult === 'OK') {
          const cnData = data.cn.split(',');
          this.authService.user = {
            idCode: cnData[2].split('-')[1].trim(),
            firstName: cnData[1].slice(0, -1),
            lastName: cnData[0].slice(0, -1)
          };
          this.router.navigateByUrl('/main-page');
        } else {
          alert('Logging in with SmartID failed!');
          this.cancel();
        }
      });
  }

  cancel() {
    this.polling = false;
    delete this.smartIdSession;
    delete this.challenge;
  }

}
