import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {UserInfo} from '../userInfo';
import {Observable} from 'rxjs';
import {Result} from '../../common/entity/result';

@Component({
  selector: 'app-user-detail',
  templateUrl: './userDetail.component.html',
  styleUrls: ['./userDetail.component.css']
})
export class UserDetailComponent implements OnInit {

  userInfo: UserInfo;
  failedMsg: string;

  constructor(private router: ActivatedRoute, private location: Location, private userService: UserService) {
  }

  ngOnInit() {
    const userDetailResult = this.fetchContent();
    userDetailResult.subscribe(
      result => {
        if (result.success) {
          this.userInfo = result.data;
          console.log(this.userInfo);
        } else {
          this.failedMsg = result.errorMsg;
        }
      }
    );
  }

  fetchContent(): Observable<Result> {
    const userName = this.router.snapshot.paramMap.get('userName');
    const userDetailResult = this.userService.queryDetail(userName);
    return userDetailResult;
  }

  back(): void {
    this.location.back();
  }
}
