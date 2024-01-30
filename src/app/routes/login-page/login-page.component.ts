import { Component, OnDestroy } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { catchError, map, pipe } from 'rxjs';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { RunningSessionService } from 'src/app/Services/running-session.service';
import { Router } from '@angular/router';
import { LoadUserInfoService } from 'src/app/Services/load-user-info.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent{
public username: boolean= false
public password:boolean = false
public failedAuth:boolean = false
public succededAuth:boolean = false
  public loginForm!: FormGroup
  constructor(private auth:AuthenticationService,private session:RunningSessionService, private router:Router,private loadSession:LoadUserInfoService){
    this.loginForm = new FormGroup({
    username:new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required])
    })
  }

  senInfo(){
    if(!this.loginForm.value.username){
      this.username = true
    }else{
      this.username = false
    }
    if(!this.loginForm.value.password){
      this.password = true
    }else{
      this.password = false
    }
    if(this.loginForm.invalid){
      return
    }else{
      this.auth.login(this.loginForm.value.username,this.loginForm.value.password).pipe(catchError((err)=>{
        if(!err.ok){
          this.failedAuth = true
        }
        throw err
      }),map((info)=>{
        if(info.authToken){
          this.succededAuth = true
          this.failedAuth = false
          this.loadSession.loadAttributes().subscribe(()=>{
            this.router.navigate(["/"])
          })
          
          
        }
      })).subscribe()
  }
 
}

}