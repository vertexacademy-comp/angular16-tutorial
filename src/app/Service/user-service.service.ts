import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from '../CONSTANTS';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = baseURL

  getUsersData(){
    return this.http.get(this.baseUrl)
  }
  

  getSingleUserData(id:any){
    return this.http.get(this.baseUrl+id)
  }
  
  updateSingleUserData(id:any, data:any){
    return this.http.put(this.baseUrl+id,data)
  }

}
