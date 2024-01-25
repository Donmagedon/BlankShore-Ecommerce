import { Component } from '@angular/core';

@Component({
  selector: 'app-saved-details-card',
  templateUrl: './saved-details-card.component.html',
  styleUrls: ['./saved-details-card.component.css']
})

export class SavedDetailsCardComponent {
public optionsActive: boolean = false
public editing: boolean = false

display(){
  this.optionsActive = true
}
hideOptions(){
  this.optionsActive = false
}
edit(){
  this.editing = true
}
}
