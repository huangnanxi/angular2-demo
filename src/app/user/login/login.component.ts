import {Component, OnInit} from '@angular/core';
import {LoginForm} from '../LoginForm';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new LoginForm();
  failedMsg: string;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.userService.login(this.model).subscribe(result => {
      if (result.success) {
        this.router.navigateByUrl('/list');
      } else {
        this.failedMsg = result.errorMsg;
      }
    });
  }

}
