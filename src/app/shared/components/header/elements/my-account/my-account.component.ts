import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from '../../../../../../../src/environments/environment'

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
})
export class MyAccountComponent implements OnInit {

  public userName: string;
  public GroupUserName: string;
  public UserAvatar: string;
  public profileImg: "assets/images/dashboard/profile.jpg";

  constructor(public router: Router) {

    if (JSON.parse(localStorage.getItem("user"))) {

    }
    else {
    }
  }

  ngOnInit() {

    

    if (sessionStorage.getItem('user_name') === null) {
      
      console.log("Session is emply")

     // setTimeout(() => {
     //   this.router.navigate(["/auth/login"]); 
     // }, 3000);           

    }
    else {
      console.log("Session have data")
      this.userName = sessionStorage.getItem('user_name');
      this.GroupUserName = sessionStorage.getItem('group_user_name');
      this.UserAvatar = sessionStorage.getItem('user_avatar');
    }

    // user_avatar
  }

  logoutFunc() {


    sessionStorage.clear();
    this.router.navigateByUrl('auth/login');

  }
}
