import { Component, OnInit ,Renderer2 } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { users } from '../../shared/services/user.service'
import { environment } from '../../../../src/environments/environment'

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {

  public app_version : string = environment.app_version;
  public newUser = false;
  public _branch_list:any ;
  public selected_branch:any;
  // public user: firebase.User;
  //public loginForm: FormGroup;
  public show: boolean = false
  public show_spinner: boolean = false;
  public show_btnSingin: boolean = true;
  public show_btnGotoApp: boolean = false;  
  public Button_Disable: boolean = false;
  public errorMessage: any;
  public btnlogin_disable: string = "false";


  public user: string;
  public password: string;
  
  public msg_alert: string;
  public show_alert_error :boolean = false;
  public show_alert_success :boolean = false;

  constructor(
    public router: Router,
    private users_sv: users,
    private renderer: Renderer2,

  ) {

    // this.loginForm = this.fb.group({
    //   email: ["", [Validators.required]],
    //   password: ["", Validators.required],
    // });

  }

  ngOnInit() {

    this.show_spinner=false
    this.Button_Disable=false

    this.btnlogin_disable = 'false'
    this.user = "wisard"
    this.password = "wds6597"

    this.renderer.selectRootElement('#user_login').focus();

    var _user = sessionStorage.getItem('user_id');
    var _password = sessionStorage.getItem('password');

      if (_user===null)
      {
        console.log('Cookies is empty !!! ')    
      } 
      else
      {
        var _user_name = sessionStorage.getItem('user_name');
        console.log('>> user_id = '+_user)    
        console.log('>> _user_name = '+_user_name)    
        console.log('Cookies have data !!! ')    
      }
  }


  input_keydown() {

    console.log('input_keydown')
    console.log('>> user=' + this.user)
    console.log('>> password=' + this.password)

    if (this.user !== "" && this.password !== "") {
      this.btnlogin_disable = 'true'
    }
    else {
      this.btnlogin_disable = 'false'
    }

    console.log('>> btnlogin_disable=' + this.btnlogin_disable)
  }

  login() {
    
    
    this.Button_Disable=true

    console.log('login')

    if (this.user !== "" && this.password !== "") {      
      
      this.users_sv.getSingle(this.user, this.password).subscribe(response => {

        if (response['group_user_id'] === null) {          

          console.log('>> incorrect user or password')
          
          this.Button_Disable=false          
          this.msg_alert = "User หรือ Password ของท่านไม่ถูกต้องกรุณาตรวจสอบใหม่"
          this.show_alert_error = true

          this.renderer.selectRootElement('#user_login').focus();

          setTimeout(() => {
            this.show_alert_error = false
          }, 3000);
        }
        else {      
          console.log('>> User & Password is correct')

          //this.show_alert_success = true
          sessionStorage.setItem('user_id', response['user_id']);
          sessionStorage.setItem('user_name', response['user_name']);
          sessionStorage.setItem('group_user_id', response['group_user_id']);
          sessionStorage.setItem('group_user_name', response['group_user_name']);
          sessionStorage.setItem('user_login', this.user);

          sessionStorage.setItem('user_avatar', "avartar_job.png");

          console.log('save sessionStorage Successfull ')

          this.users_sv.getBranchList('US097').subscribe(response => {
            this._branch_list = response
            this.selected_branch = this._branch_list[0].wh_name     
          });    
          
          this.show_btnSingin  = false
          this.show_btnGotoApp = true

        }
      });
    }
    else{
      this.Button_Disable=false      
    }

  }

  
  GotoApplication()
  {
    this.show_spinner=true

    if (this.selected_branch.wh_name!==undefined)
      {
        console.log('selected_branch.wh_name not undefined')

          var branch_find = this._branch_list.find(({wh_name})=> wh_name== this.selected_branch.wh_name )       
          console.log('this.selected_branch')
          console.log( '>> wh_name = '+  this.selected_branch.wh_name)
          console.log( '>> branch_find.wh_id = '+branch_find.wh_id)
          sessionStorage.setItem('wh_id_default', branch_find.wh_id);
          sessionStorage.setItem('wh_name_default', branch_find.wh_name);

      }
      else {
          console.log('selected_branch.wh_name is undefined')

          var branch_find = this._branch_list.find(({wh_name})=> wh_name== this.selected_branch )       
          
          console.log( '>> wh_name = '+  this.selected_branch)
          console.log( '>> branch_find.wh_id = '+branch_find.wh_id)
          sessionStorage.setItem('wh_id_default', branch_find.wh_id);
          sessionStorage.setItem('wh_name_default', branch_find.wh_name);
      }

     var _wh_id_default = sessionStorage.getItem('wh_id_default');      
     setTimeout(() => {
      this.router.navigateByUrl('transaction/transaction_byitem');
      }, 3000);

  }

  goto(){

    this.router.navigateByUrl('dashboard/default');
  }

  // login() {

  //   // if (this.loginForm.value["email"] == "Test@gmail.com" && this.loginForm.value["password"] == "test123") {

  //   //   let user = {
  //   //               email: "Test@gmail.com",
  //   //               password: "test123XXXX",
  //   //               name: "test user",
  //   //             };

  //   //   localStorage.setItem("user", JSON.stringify(user));      
  //   //   this.router.navigate(["/dashboard/default"]);
  //   // }

  // }

  showPassword() {
    this.show = !this.show
  }

}
