import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AdminGuard  {
  constructor(public router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log("=== AdminGuard ===")
    console.log("Checking your authorized ... ")

    if (sessionStorage.getItem('user_id') === null) {      

      console.log("XX -- Your are not authorized. -- XX ")
      console.log("Your Session is emply !! Going to Login page. ")      
      this.router.navigate(["/auth/login"]);
      return true;     
      }

    // Guard for user is login or not
    //let user = JSON.parse(localStorage.getItem("user_id"));

    // let user = localStorage.getItem("user_id");
    // if (!user || user === null) {
    //   this.router.navigate(["/auth/login"]);
    //   return true;
    // } else if (user) {
    //   if (!Object.keys(user).length) {
    //     this.router.navigate(["/auth/login"]);
    //     return true;
    //   }
    // }
    return true;

  }
}
