import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiscellaneousDataService {

  constructor(private http: HttpClient){  
   }
   allCountries():Observable<any>{
    return this.http.get<any>("https://countriesnow.space/api/v0.1/countries/states")
   }
}
