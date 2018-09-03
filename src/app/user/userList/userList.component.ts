import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {UserInfo} from '../userInfo';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css']
})
export class UserListComponent implements OnInit {

  userList: UserInfo[] = [];
  failedMsg: string;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    const userListResult = this.fetchContent();
    userListResult.subscribe(
      result => {
        if (result.success) {
          this.userList = result.data.itemList;
        } else {
          this.failedMsg = result.errorMsg;
        }
      }
    );
  }

  fetchContent() {
    const userListResult = this.userService.queryUserInfoList();
    return userListResult;
  }

  pageDelete(userName: string): void {
    this.userList.forEach(function (user: UserInfo, index, list) {
      if (user.userName === userName) {
        list.splice(index, 1);
      }
    });
  }

}
