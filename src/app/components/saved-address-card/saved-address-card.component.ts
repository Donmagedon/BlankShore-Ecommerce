import { Component, Host } from '@angular/core';
import { Input,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-saved-address-card',
  templateUrl: './saved-address-card.component.html',
  styleUrls: ['./saved-address-card.component.css']
})

export class SavedAddressCardComponent {
  public optionsActive: boolean = false
  public notRemoved: boolean = false
  public editing : boolean = false
  @Input() test : boolean = false
  selectOptions(){
    this.optionsActive = !this.optionsActive
  }
  hideOptions(){
    this.optionsActive = false
  }
  hideCard(){
    this.notRemoved = true

  }
  removeAddress(){
    this.notRemoved = true
  }
  editAddress(){
    this.hideCard()
    this.editing = true
  }

}
