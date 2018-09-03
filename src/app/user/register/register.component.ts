import {Component, OnInit} from '@angular/core';
import {RegisterForm} from '../RegisterForm';
import {UserService} from '../user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new RegisterForm();
  failedMsg: string;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.userService.register(this.model).subscribe(result => {
      if (result.success) {
        this.router.navigateByUrl('/login');
      } else {
        this.failedMsg = result.errorMsg;
      }
    });
  }

}
