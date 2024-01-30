import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateInfoService {

  constructor(private http : HttpClient) { }
  modifiedForms(obj:Array<any>){
   return obj.reduce((acc,curr)=>{
      if(curr[1].pristine === true){
        return acc
      }
      return {...acc,[curr[0]]:curr[1].value}
      
    },{})
  }
  makeChanges(query:any):Observable<any>{
    return this.http.post<any>("api/userLoggedIn/update",{update:query})
  }
  addToChopin(cart:any):Observable<any>{
    return this.http.post<any>("api/userLoggedIn/update-cart",{shopping:cart})
  }
  removeFromChopin(itemName:string):Observable<any>{
    return this.http.delete<any>(`api/userLoggedIn/remove-item/${itemName}`)
  }
}
