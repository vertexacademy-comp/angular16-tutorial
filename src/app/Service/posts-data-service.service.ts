import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class PostsDataService {

  constructor(private http:HttpClient) { }


  getPostData(){
    return this.http.get('assets/data.json')  
  }

  // postData(data:any){
  //   return this.http.post('',data)
  // }

}
