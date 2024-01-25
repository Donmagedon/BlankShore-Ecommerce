import { Component } from '@angular/core';
import { AbstractControl, FormControl,FormGroup,Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{
  public contactRequest! :FormGroup
  constructor(){
    this.contactRequest = new FormGroup(
      {
       firstName: new FormControl(null,Validators.required),
       lastName: new FormControl(null,Validators.required),
       email: new FormControl(null,[Validators.required,Validators.email]),
       message: new FormControl(null,[Validators.maxLength(300)])

      }
      )

  }
  get firstName():any{ return this.contactRequest.get("firstName")}
  get lastName():any{ return this.contactRequest.get("lastName")}
  get email(){return this.contactRequest.get("email")}

  ngOnInit(): void {
  }
  test(){

  }

}
