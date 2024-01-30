import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadUserInfoService } from 'src/app/Services/load-user-info.service';
import { CurrentUser } from 'src/app/models/current-user';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UpdateInfoService } from 'src/app/Services/update-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-personal-details',
  templateUrl: './edit-personal-details.component.html',
  styleUrls: ['../add-personal-details-form/add-personal-details-form.component.css']
})
export class EditPersonalDetailsComponent implements OnInit{
public currentUser$!: Observable<CurrentUser>
public changes!: any
public formInvalid : boolean = false
public detailsForm:FormGroup = new FormGroup({
  first_name:new FormControl(null,[Validators.required]),
  last_name:new FormControl(null,[Validators.required]),
  username:new FormControl(null,[Validators.required]),
  favorite_song:new FormControl(null,{}),

})
constructor(private session:LoadUserInfoService,private formSan:UpdateInfoService,private router: Router){

}

public get firstName() : any {
  return this.detailsForm.get("first_name")
}
public get lastName() : any {
  return this.detailsForm.get("last_name")
}
public get username() : any {
  return this.detailsForm.get("username")
}


loadUser(){
  this.currentUser$ = this.session.loadAttributes()
}
detectChanges(){
  this.changes = this.formSan.modifiedForms(Object.entries(this.detailsForm.controls))
}
submitChanges(){
  this.formInvalid = this.detailsForm.invalid
  if(this.formInvalid){
    return
  }else{
    if(!this.changes){
      this.router.navigate(["/"])
    }else{
      this.formSan.makeChanges(this.changes).subscribe()
      this.router.navigate(["user/personal"])
    }
  }
}
ngOnInit(): void {
  this.loadUser()
  this.currentUser$.subscribe((info)=>{
    this.detailsForm.get("first_name")?.setValue(info.first_name)
    this.detailsForm.get("last_name")?.setValue(info.last_name)
    this.detailsForm.get("username")?.setValue(info.username)
    this.detailsForm.get("favorite_song")?.setValue(info.favorite_song)

  })
}
}
